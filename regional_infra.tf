terraform {
  backend "remote" {
    organization = "humanlambdas"

    workspaces {
      name = "hl-rest-api"
    }
  }
}

resource "google_storage_bucket" "au-data-prod" {
  name                        = "au-data-prod"
  location                    = "AUSTRALIA-SOUTHEAST1"
  project                     = "valid-kayak-295312"
  force_destroy               = false
  uniform_bucket_level_access = true
}

resource "google_storage_bucket" "au-data-stg" {
  name                        = "au-data-stg"
  location                    = "AUSTRALIA-SOUTHEAST1"
  project                     = "valid-kayak-295312"
  force_destroy               = false
  uniform_bucket_level_access = true
}

resource "google_storage_bucket" "us-data-prod" {
  name                        = "us-data-prod"
  location                    = "US-EAST1"
  project                     = "valid-kayak-295312"
  force_destroy               = false
  uniform_bucket_level_access = true
}

resource "google_storage_bucket" "us-data-stg" {
  name                        = "us-data-stg"
  location                    = "US-EAST1"
  project                     = "valid-kayak-295312"
  force_destroy               = false
  uniform_bucket_level_access = true
}

resource "google_storage_bucket" "data-local-dev" {
  name                        = "data-local-dev"
  location                    = "EUROPE-WEST1"
  project                     = "valid-kayak-295312"
  force_destroy               = false
  uniform_bucket_level_access = true
}
