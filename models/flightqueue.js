const mongoose = require("mongoose")

const FlightQueueSchema = new mongoose.Schema({

  _schedule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Schedules"
  },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  userName: {
    type: String
  },
  _flightShop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shops"
  },
  createdDate: {
    type: Date
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  },
  deliveredDate: {
    type: Date
  },
  totalCalls: {
    type: Number
  },
  shopStatus: {
    type: String,
    default: "In progress"
  },
  shopType: {
    type: String,
    enum: ["Realtime", "Schedule"]
  }

})

FlightQueueSchema.set("timestamps", true)
FlightQueueSchema.set("toJSON", { virtuals: true })
FlightQueueSchema.set("toObject", { virtuals: true })

module.exports = mongoose.model("FlightQueue", FlightQueueSchema)
