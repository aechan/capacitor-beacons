declare module "@capacitor/core" {
  interface PluginRegistry {
    Beacons: CapacitorBeaconsPlugin;
  }
}

export enum ProximityEstimate {
  unknown = 0,
  immediate = 1,
  near = 2,
  far = 3
}

/**
 * The data recieved from a beacon ping.
 * 
 * Not all fields are available on all platforms,
 * so make sure to check for null on the optional fields.
 */
export interface BeaconData {
  /**
   * The Received Signal Strength Indicator of this beacon at the time when it was pinged.
   */
  rssi: number;
  /**
   * Coarse proximity estimate for beacon: unknown, immediate, near, far
   * 
   * Copied from iOS CLProximity
   */
  estimatedProximity?: ProximityEstimate;
  /**
   * Accuracy (in meters) of the proximity estimate.
   */
  proximityAccuracy?: number;
  /**
   * The time that the beacon ping was observed by the system.
   */
  observedAt?: Date;
  /**
   * The beacon's UUID (iBeacon specific)
   */
  uuid?: string;
  /**
   * The beacon's major identifier (iBeacon specific)
   */
  major?: number;
  /**
   * The beacon's minor identifier (iBeacon specific)
   */
  minor?: number;
  /**
   * 
   */
}

export interface CapacitorBeaconsPlugin {
  
}
