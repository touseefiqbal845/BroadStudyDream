const mongoose = require("mongoose");
const { AgentInfo } = require("../modals/Agent");

exports.createAgent = async (req, res) => {
  try {
    const agent = new AgentInfo(req.body);
    await agent.save();
    res.status(201).json(agent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllAgents = async (req, res) => {
  try {
    const { bank } = req.query;
    
    
    let query = {};
    let projection = {};
    
    if (bank) {
      query = {
        "complete_agentInfo.company_association_details.bank_account_details": {
          $elemMatch: {
            bank_name: bank
          }
        }
      };
    
      projection = {
        'complete_agentInfo.$': 1
      };
    }
      
    const agents = await AgentInfo.find(
       query
    );
    res.json({agents});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAgentById = async (req, res) => {
  try {
    const agent = await AgentInfo.findById(req.params.id);
    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }

    res.json(agent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateAgentById = async (req, res) => {
  try {
    const agent = await AgentInfo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }
    res.json(agent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteAgentById = async (req, res) => {
  try {
    const agent = await AgentInfo.findByIdAndDelete(req.params.id);
    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }
    res.json({ message: "Agent deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
