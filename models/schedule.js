const mongoose = require("mongoose")

const ScheduleSchema = new mongoose.Schema({

  scheduleName: {
    type: String,
    required: true
  },
  _shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop"
  },
  _timezone: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Timezone",
    required: true
  },
  timezoneName: {
    type: String
  },
  month: {
    type: String,
    default: "*"
  },
  dayOfMonth: {
    type: String,
    default: "*"
  },
  dayOfWeek: {
    type: String,
    default: "*"
  },
  hour: {
    type: String,
    default: "*"
  },
  minute: {
    type: String,
    default: "*"
  },
  second: {
    type: Number
  },
  isActiveStatus: {
    type: Boolean,
    default: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true
  },
  userName: {
    type: String
  },
  isCustomerCreated: {
    type: Boolean
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  _createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null
  },
  _updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null
  },
  deletedBy: {
    type: Object
  }

})

ScheduleSchema.set("timestamps", true)
ScheduleSchema.set("toJSON", { virtuals: true })
ScheduleSchema.set("toObject", { virtuals: true })

module.exports = mongoose.model("Schedule", ScheduleSchema)
