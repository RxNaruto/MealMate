/*
  Warnings:

  - You are about to drop the column `restuarantId` on the `RestaurantFood` table. All the data in the column will be lost.
  - Added the required column `restaurantId` to the `RestaurantFood` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RestaurantFood" DROP CONSTRAINT "RestaurantFood_restuarantId_fkey";

-- AlterTable
ALTER TABLE "RestaurantFood" DROP COLUMN "restuarantId",
ADD COLUMN     "restaurantId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "RestaurantFood" ADD CONSTRAINT "RestaurantFood_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
