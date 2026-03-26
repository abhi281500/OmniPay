import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        orderId: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        paymentId: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        amount: {
            type: Number,
            required: true,

        },
        currency: {
            type: String,
            required: true,

        },
        status: {
            type: Boolean

        },
    },

        { timestamps: true })

export const payment = mongoose.model("payment", paymentSchema)
