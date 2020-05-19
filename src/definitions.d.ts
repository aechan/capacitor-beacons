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
   * The beacon's UID (Eddystone specific)
   */
  uid?: string;
  /**
   * The beacon's TLM packet
   */
  tlm?: string;
}

export enum BeaconProtocol {
  IBEACON = 0,
  EDDYSTONE = 1
}

interface iBeaconIdData {
  protocol: BeaconProtocol.IBEACON;
  uuid: string;
  major?: number;
  minor?: number;
}

interface EddystoneIdData {
  protocol: BeaconProtocol.EDDYSTONE;
  uid?: string;
  eid?: string;
}

interface EddystonePacket {
  protocol: BeaconProtocol.EDDYSTONE;

}

interface iBeaconPacket {
  protocol: BeaconProtocol.IBEACON;
  /**
   * The Received Signal Strength Indicator of this beacon at the time when it was pinged.
   */
  rssi: number;
  /**
   * Coarse proximity estimate for beacon: unknown, immediate, near, far
   * 
   * Copied from iOS CLProximity
   */
  estimatedProximity: ProximityEstimate;
  /**
   * Accuracy (in meters) of the proximity estimate.
   */
  proximityAccuracy: number;
  /**
   * The time that the beacon ping was observed by the system.
   */
  observedAt: Date;
}

export type BeaconIdData = iBeaconIdData | EddystoneIdData;
export type BeaconPacket = iBeaconPacket | EddystonePacket;

export interface CapacitorBeaconsPlugin {
  startMonitoringForBeacon(beaconIdData: BeaconIdData): Promise<string>;
  stopMonitoringForBeacon(internalId: string): void;
  onRegionEntered(callback: (internalId: string) => void, error: (err: any) => void): void;
  onRegionExited(callback: (internalId: string) => void, error: (err: any) => void): void;
  getRegisteredBeacons(): string[];
}
