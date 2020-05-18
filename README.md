# capacitor-beacons

## Introduction

This Capacitor plugin is written with the goal of unifying the interfaces of multiple beacon standards under a single plugin.

The standards currently supported are:
- iBeacon (iOS)
- Eddystone (Android)

The motivation behind supporting these different standards under a single plugin is to reduce code complexity as most use cases for beacons don't need to use specific features from the different standards and simply need some general functionality to be exposed. The other motivation is that there is currently no Capacitor plugin that supports beacon standards native to both iOS and Android devices, so this creates a general cross-platform interface for beacons that keeps in line with the core concept behind Capacitor.

## Installation

Use npm to install the package and sync the plugin with your Capacitor platforms.
```bash
npm install capacitor-beacons
npx cap sync
```

## Usage

```ts
import { Plugins } from '@capacitor/core';
const Beacons = { Plugins }

// ==========================
// First we need to request bluetooth monitoring authorization from the OS
// ==========================

async () => {
    // for normal beacon scanning while app is open
    await Beacons.requestForegroundUseAuthorization();
    // OR
    // for background beacon scanning (NOT RECOMMENDED)
    await Beacons.requestBackgroundUseAuthorization();
    // both of the above will throw an error if 
    // permission is rejected or some other unexpected state is reached.
    
    
    // ==========================
    // Next, we 
    // ==========================
}

```