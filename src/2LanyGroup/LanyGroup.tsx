import OptimeFooter from "./components/OptimeFooter/OptimeFooter";
import OptimeHeader from "./components/OptimeHeader/OptimeHeader";
import OptimeBanner from "./components/OptimeBanner/OptimeBanner";
import OptimeServices from "./pages/OptimeServices/OptimeServices";
import OptimeFeature from "./pages/OptimeFeature/OptimeFeature";
import OptimeTestimony from "./pages/OptimeTestimony/OptimeTestimony";

import "./LanyGroup.css";
import OptimeLocation from "./pages/OptimeLocation/OptimeLocation";

export default function LanyGroup() {
  return (
    <main className="Lany-Group">
      <OptimeHeader />
      <OptimeBanner />
      <OptimeServices />
      <OptimeFeature />
      <OptimeTestimony />
      <OptimeLocation />
      <OptimeFooter />
    </main>
  );
}
