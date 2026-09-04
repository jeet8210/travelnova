import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({ ...req.body, user: req.user._id });
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate("package");
  res.json(bookings);
};

export const getAllBookings = async (req, res) => {
  const bookings = await Booking.find().populate("package user");
  res.json(bookings);
};

export const updateBookingStatus = async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  if (!booking) return res.status(404).json({ message: "Booking not found" });
  res.json(booking);
};
