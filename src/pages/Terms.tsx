import React from 'react';

export function Terms() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-display font-bold mb-8 text-primary">Terms of Service</h1>
      <div className="prose prose-lg max-w-none text-primary/70">
        <p>Last updated: March 20, 2026</p>
        <p>Welcome to IHM Healthcare Foundation. By using our website, you agree to these terms.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">1. Use of Website</h2>
        <p>This website is provided for informational and charitable purposes. You agree to use it only for lawful purposes.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">2. Donations</h2>
        <p>All donations made through this website are voluntary and non-refundable unless otherwise specified.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">3. Intellectual Property</h2>
        <p>All content on this website is the property of IHM Healthcare Foundation.</p>
      </div>
    </div>
  );
}
