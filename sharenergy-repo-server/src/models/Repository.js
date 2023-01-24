import mongoose from "mongoose";

const repositorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true,
            }
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
        code: {
            type: String,
        },
        userId: {
            type: String,
            required: true,
        }

    },
    {
        timestamps: true

    }
);

export default mongoose.model('Repository', repositorySchema);
