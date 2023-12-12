const mongoose = require("mongoose")

const InputSchema = new mongoose.Schema({

  _queue: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FlightQueue"
  },
  _schedule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Schedules"
  },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  userName: {
    type: String
  },
  _flyFrom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airport"
  },
  _flyTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airport"
  },
  flyFrom: {
    type: String
  },
  flyTo: {
    type: String
  },
  isRoundTrip: {
    type: Boolean
  },
  departDate: {
    type: Date
  },
  returnDate: {
    type: Date
  },
  travellers: {
    adults: {
      type: Number
    },
    infants: {
      type: Number
    },
    children: {
      type: Number
    }
  },
  channelName: {
    type: String
  },
  channelType: {
    type: String
  },
  _flightShop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FlightShop"
  },
  _source: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Source"
  },
  sourceName: {
    type: String
  },
  sourceId: {
    type: Number
  },
  posName: {
    type: String
  },
  _pos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pos"
  },
  _cabinClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CabinClass"
  },
  _currency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Currency"
  },
  currencyName: {
    type: String
  },
  LOS: {
    type: Number
  },
  status: {
    type: Number,
    default: 0
  },
  retry: {
    type: Number,
    default: 0
  },
  qaStatus: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }

})

InputSchema.set("timestamps", true)
InputSchema.set("toJSON", { virtuals: true })
InputSchema.set("toObject", { virtuals: true })

module.exports = mongoose.model("Input", InputSchema)
