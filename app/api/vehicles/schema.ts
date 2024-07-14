import { z } from "zod";

const vehicleSchema = z.object({
  vin: z.string().min(1, "VIN is required"), // VIN number provided by the user
  licensePlate: z.string().optional(), // License plate might not be fetched from VIN
  make: z.string().optional(), // Make of the vehicle
  model: z.string().optional(), // Model of the vehicle
  year: z.number().int().optional(), // Year of manufacture
  status: z.enum(["available", "rented", "maintenance"]).default("available"), // Vehicle status
  mileage: z.number().int().optional(), // Vehicle mileage
  location: z.string().optional(), // Location where the vehicle is available
  dailyRate: z.number().optional(), // Daily rental rate
  createdAt: z.date().default(() => new Date()), // Creation date
  updatedAt: z.date().default(() => new Date()), // Last update date
});

export default vehicleSchema;
