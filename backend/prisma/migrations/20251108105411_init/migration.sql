/*
  Warnings:

  - A unique constraint covering the columns `[country,tag,city]` on the table `geolocations` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "proxies_geolocationId_key";

-- CreateIndex
CREATE UNIQUE INDEX "geolocations_country_tag_city_key" ON "geolocations"("country", "tag", "city");
