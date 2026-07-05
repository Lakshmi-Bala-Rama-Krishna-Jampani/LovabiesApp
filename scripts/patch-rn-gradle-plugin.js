const fs = require('fs');
const path = require('path');

const gradlePluginDir = path.join(
  __dirname,
  '..',
  'node_modules',
  '@react-native',
  'gradle-plugin',
);
const gradlePropertiesPath = path.join(gradlePluginDir, 'gradle.properties');

if (!fs.existsSync(gradlePluginDir)) {
  process.exit(0);
}

// Remove stale in-process Kotlin override (causes multi-hour hangs on 8 GB RAM).
if (fs.existsSync(gradlePropertiesPath)) {
  fs.unlinkSync(gradlePropertiesPath);
}
