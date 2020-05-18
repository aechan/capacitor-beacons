
  Pod::Spec.new do |s|
    s.name = 'CapacitorBeacons'
    s.version = '0.0.1'
    s.summary = 'Unified beacon plugin for capacitor. Supports iBeacons for iOS and Eddystone becaons for Android.'
    s.license = 'GPL-3.0'
    s.homepage = 'https://github.com/aechan/capacitor-beacons'
    s.author = 'Alec Chan'
    s.source = { :git => 'https://github.com/aechan/capacitor-beacons', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end