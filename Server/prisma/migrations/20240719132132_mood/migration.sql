/*
  Warnings:

  - You are about to drop the column `companyName` on the `company` table. All the data in the column will be lost.
  - Added the required column `company_name` to the `company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `company` DROP COLUMN `companyName`,
    ADD COLUMN `company_name` VARCHAR(191) NOT NULL;
