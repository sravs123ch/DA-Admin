import React, { useState, useEffect } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

const DeviceTest = () => {
  const [fingerprint, setFingerprint] = useState(null);

  useEffect(() => {
    const loadFingerprint = async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      setFingerprint(result.visitorId);
    };

    loadFingerprint();
  }, []);

  return (
    <div>
      <h2>Device Information</h2>
      <p>
        <strong>Device Fingerprint:</strong> {fingerprint || "Loading..."}
      </p>
    </div>
  );
};

export default DeviceTest;