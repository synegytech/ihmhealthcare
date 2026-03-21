/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { WaysToGive } from './pages/WaysToGive';
import { NewsEvents } from './pages/NewsEvents';
import { NewsDetail } from './pages/NewsDetail';
import { Contact } from './pages/Contact';
import { Volunteer } from './pages/Volunteer';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { FAQ } from './pages/FAQ';
import { CookieConsent } from './components/CookieConsent';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="give" element={<WaysToGive />} />
          <Route path="news" element={<NewsEvents />} />
          <Route path="news/:id" element={<NewsDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}
