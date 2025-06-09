import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    sunscriber:{
        type: Schema.Types.ObjectId, //one who is subscribing
        ref: "User"
    },
    channel:{
        type: Schema.Types.ObjectId, //one to whom subscriber is  subscribing
        ref: "User"
    }
},{timestamps: trueff})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)