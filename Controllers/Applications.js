const { Applications } = require('../modals/Applications');

exports.createApplication = async (req, res) => {
    try {
        const application = new Applications(req.body);
        await application.save();
        res.status(201).json(application);
    } catch (error) {
        res.status(400).json({ message: 'Error creating application', error: error.message });
    }
};

exports.getApplications = async (req, res) => {
        const {id} = req.params
    try {
        const applications = await Applications.find({ uni_and_course_details: id }).populate('uni_and_course_details');
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving applications', error: error.message });
    }
};

exports.getApplicationById = async (req, res) => {
    try {
        const application = await Applications.findById(req.params.id).populate('uni_and_course_details');
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving application', error: error.message });
    }
};

exports.updateApplication = async (req, res) => {
    try {
        const application = await Applications.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json(application);
    } catch (error) {
        res.status(400).json({ message: 'Error updating application', error: error.message });
    }
};

exports.deleteApplication = async (req, res) => {
    try {
        const application = await Applications.findByIdAndDelete(req.params.id);
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json({ message: 'Application deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting application', error: error.message });
    }
};
