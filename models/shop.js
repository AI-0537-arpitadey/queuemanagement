const mongoose = require("mongoose")

const ShopSchema = new mongoose.Schema({

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
  reportName: {
    type: String
  },
  routeType: {
    type: String
  },
  carriers: {
    type: [String]
  },
  _source: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Source"
    }]
  },
  returnDays: {
    type: Object
  },
  rtType: {
    type: Number
  },
  source: {
    type: Array
  },
  los: {
    type: Array
  },
  alternateSource: {
    type: String
  },
  _cabinClasses: {
    type: [String]
  },
  pax: {
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
  pos: {
    type: String
  },
  stop: {
    type: Number
  },
  fareType: {
    type: String
  },
  currency: {
    type: String
  },
  _currency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Currency"
  },
  currencyName: {
    type: String
  },
  duration: {
    type: String
  },
  horizon: {
    type: String
  },
  paxNumber: {
    type: Number
  },
  horizonOffset: {
    type: String
  },
  startDate: {
    type: String
  },
  endDate: {
    type: String
  },
  shopName: {
    type: String
  },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  userName: {
    type: String
  },
  isActiveStatus: {
    type: Boolean
  },
  currQueue: {
    type: Number
  },
  prevQueue: {
    type: Number
  },
  lastRun: {
    type: String
  },
  nextRun: {
    type: String
  },
  deliveryMode: {
    type: [{
      type: String,
      enum: ["webhook", "db"]
    }]
  },
  vertical: {
    type: String
  }

})

ShopSchema.set("timestamps", true)
ShopSchema.set("toJSON", { virtuals: true })
ShopSchema.set("toObject", { virtuals: true })

module.exports = mongoose.model("Shop", ShopSchema)
