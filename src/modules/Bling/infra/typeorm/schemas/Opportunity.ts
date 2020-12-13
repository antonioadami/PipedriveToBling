import mongoose from 'mongoose';
import { v4 } from 'uuid';

const OpportunitySchema = new mongoose.Schema({
    id: {
        type: String,
        default: v4(),
        required: true,
    },
    costumer_name: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: new Date(),
        require: true,
    },
    value: {
        type: Number,
        require: true,
    },
});

const Opportunity = mongoose.model('Opportunity', OpportunitySchema);

export default Opportunity;
