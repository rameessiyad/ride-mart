-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "BikeStatus" AS ENUM ('AVAILABLE', 'UNAVAILABLE', 'SOLD');

-- CreateEnum
CREATE TYPE "DayOfWeek" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED', 'NO_SHOW');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "imageUrl" TEXT,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bike" (
    "id" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "mileage" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "BikeStatus" NOT NULL DEFAULT 'AVAILABLE',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DealerShipInfo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Ride Mart',
    "address" TEXT NOT NULL DEFAULT 'Kottayam, Kerala',
    "phone" TEXT NOT NULL DEFAULT '7025014236',
    "email" TEXT NOT NULL DEFAULT 'ridemart@gmail.com',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DealerShipInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkingHour" (
    "id" TEXT NOT NULL,
    "dealerShipId" TEXT NOT NULL,
    "dayOfWeek" "DayOfWeek" NOT NULL,
    "openTime" TEXT NOT NULL,
    "closeTime" TEXT NOT NULL,
    "isOpen" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkingHour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSavedBike" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "bikeId" TEXT,
    "savedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserSavedBike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestDriveBooking" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "bikeId" TEXT,
    "bookingDate" DATE NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TestDriveBooking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkUserId_key" ON "User"("clerkUserId");

-- CreateIndex
CREATE INDEX "Bike_make_model_idx" ON "Bike"("make", "model");

-- CreateIndex
CREATE INDEX "Bike_price_idx" ON "Bike"("price");

-- CreateIndex
CREATE INDEX "Bike_year_idx" ON "Bike"("year");

-- CreateIndex
CREATE INDEX "Bike_featured_idx" ON "Bike"("featured");

-- CreateIndex
CREATE INDEX "WorkingHour_dealerShipId_idx" ON "WorkingHour"("dealerShipId");

-- CreateIndex
CREATE INDEX "WorkingHour_dayOfWeek_idx" ON "WorkingHour"("dayOfWeek");

-- CreateIndex
CREATE INDEX "WorkingHour_isOpen_idx" ON "WorkingHour"("isOpen");

-- CreateIndex
CREATE UNIQUE INDEX "WorkingHour_dealerShipId_dayOfWeek_key" ON "WorkingHour"("dealerShipId", "dayOfWeek");

-- CreateIndex
CREATE INDEX "UserSavedBike_userId_idx" ON "UserSavedBike"("userId");

-- CreateIndex
CREATE INDEX "UserSavedBike_bikeId_idx" ON "UserSavedBike"("bikeId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSavedBike_userId_bikeId_key" ON "UserSavedBike"("userId", "bikeId");

-- CreateIndex
CREATE INDEX "TestDriveBooking_bikeId_idx" ON "TestDriveBooking"("bikeId");

-- CreateIndex
CREATE INDEX "TestDriveBooking_userId_idx" ON "TestDriveBooking"("userId");

-- CreateIndex
CREATE INDEX "TestDriveBooking_bookingDate_idx" ON "TestDriveBooking"("bookingDate");

-- CreateIndex
CREATE INDEX "TestDriveBooking_status_idx" ON "TestDriveBooking"("status");

-- AddForeignKey
ALTER TABLE "WorkingHour" ADD CONSTRAINT "WorkingHour_dealerShipId_fkey" FOREIGN KEY ("dealerShipId") REFERENCES "DealerShipInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSavedBike" ADD CONSTRAINT "UserSavedBike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSavedBike" ADD CONSTRAINT "UserSavedBike_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestDriveBooking" ADD CONSTRAINT "TestDriveBooking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestDriveBooking" ADD CONSTRAINT "TestDriveBooking_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike"("id") ON DELETE SET NULL ON UPDATE CASCADE;
