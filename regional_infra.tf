resource "google_storage_bucket" "au-data-prod" {
  name          = "au-data-prod"
  location      = "AUSTRALIA-SOUTHEAST1"
  force_destroy = false

  uniform_bucket_level_access = true
}
