import React, { useState } from "react";

export default function Table() {
  let [displayBackToTopButton, setDisplayBackToTopButton] = useState(false);

  window.onscroll = () => scrollFunction();

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setDisplayBackToTopButton(true);
    } else {
      setDisplayBackToTopButton(false);
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <button
        onClick={topFunction}
        id="back-to-top-btn"
        style={{ display: displayBackToTopButton ? "block" : "none" }}
      >
        &#8593;
      </button>

      <div className="container">
        <h1>Table.</h1>
        <br />
        <p>Vincent's Ice Cream Tier List</p>
        <br />
        <table>
          <tr>
            <th>Ice Cream Flavor</th>
            <th>Vincent's Rating</th>
          </tr>
          <tr>
            <td>
              <a href="https://order.baskinrobbins.com/menu-details/mint-chocolate-chip/generic?id=24c3f269-c79a-49d4-9850-1e2f8742ca7f&sizes=%5B%7B%22size%22:%222.5%20oz%20scoop%22,%22id%22:%2224c3f269-c79a-49d4-9850-1e2f8742ca7f%22%7D,%7B%22size%22:%224%20oz%20scoop%22,%22id%22:%22c3821b85-9939-4247-9dfd-da1af994db74%22%7D%5D">
                Mint Chocolate Chip
              </a>
            </td>
            <td>11/10 -- S Tier</td>
          </tr>
          <tr>
            <td>
              <a href="https://order.baskinrobbins.com/menu-details/oreo-cookies-n-cream/generic?id=85640135-697d-4a43-8184-35bb771c83b6&sizes=%5B%7B%22size%22:%222.5%20oz%20scoop%22,%22id%22:%2285640135-697d-4a43-8184-35bb771c83b6%22%7D,%7B%22size%22:%224%20oz%20scoop%22,%22id%22:%223d5ee73b-b024-4503-90fb-85f9234c3c5f%22%7D%5D">
                Cookies and Cream
              </a>
            </td>
            <td>11/10 -- S Tier </td>
          </tr>
          <tr>
            <td>
              <a href="https://order.baskinrobbins.com/menu-details/very-berry-strawberry/generic?id=43586a1f-614c-44b3-bce5-54e99ea8de3f&sizes=%5B%7B%22size%22:%222.5%20oz%20scoop%22,%22id%22:%2243586a1f-614c-44b3-bce5-54e99ea8de3f%22%7D,%7B%22size%22:%224%20oz%20scoop%22,%22id%22:%2294cf2ff2-de1c-4549-b267-d4b03fb514f8%22%7D%5D">
                Very Berry Strawberry
              </a>
            </td>
            <td>10/10 -- A Tier</td>
          </tr>
          <tr>
            <td>
              <a href="https://order.baskinrobbins.com/menu-details/vanilla/generic?id=5d819e45-671e-4006-bd7b-bc75d84ceb72&sizes=%5B%7B%22size%22:%222.5%20oz%20scoop%22,%22id%22:%225d819e45-671e-4006-bd7b-bc75d84ceb72%22%7D,%7B%22size%22:%224%20oz%20scoop%22,%22id%22:%220b0c0fb9-f546-4d70-9b47-b81b6fa1938d%22%7D%5D">
                Vanilla
              </a>
            </td>
            <td>10/10 -- A Tier</td>
          </tr>
          <tr>
            <td>
              <a href="https://order.baskinrobbins.com/menu-details/wild-n-reckless-sherbet/generic?id=30263ad6-3a47-447f-a5ac-479591cc6bfe&sizes=%5B%7B%22size%22:%222.5%20oz%20scoop%22,%22id%22:%2230263ad6-3a47-447f-a5ac-479591cc6bfe%22%7D,%7B%22size%22:%224%20oz%20scoop%22,%22id%22:%22636c8487-d58d-402c-9db8-eb241d2126f5%22%7D%5D">
                Wild 'n Reckless Sherbet
              </a>
            </td>
            <td>7/10 -- B Tier</td>
          </tr>
          <tr>
            <td>
              <a href="https://order.baskinrobbins.com/menu-details/chocolate-chip-cookie-dough/generic?id=747c440b-9015-45da-9cbf-1281352a2274&sizes=%5B%7B%22size%22:%222.5%20oz%20scoop%22,%22id%22:%22747c440b-9015-45da-9cbf-1281352a2274%22%7D,%7B%22size%22:%224%20oz%20scoop%22,%22id%22:%225d95aef8-f339-467b-b5b7-280417ff6786%22%7D%5D">
                Cookie Dough
              </a>
            </td>
            <td>8/10 -- B Tier</td>
          </tr>
          <tr>
            <td>
              <a href="https://order.baskinrobbins.com/menu-details/world-className-chocolate/generic?id=7d0ed681-b6fd-4dfe-bace-60364d4bffa8&sizes=%5B%7B%22size%22:%222.5%20oz%20scoop%22,%22id%22:%227d0ed681-b6fd-4dfe-bace-60364d4bffa8%22%7D,%7B%22size%22:%224%20oz%20scoop%22,%22id%22:%2207383559-af04-4ca9-b0f1-3cfa6ac7d8f2%22%7D%5D">
                World className Chocolate
              </a>
            </td>
            <td>8/10 -- B Tier</td>
          </tr>
          <tr>
            <td>
              <a href="https://order.baskinrobbins.com/menu-details/rocky-road/generic?id=51c414a4-45ec-409b-87d7-d00525b246ce&sizes=%5B%7B%22size%22:%222.5%20oz%20scoop%22,%22id%22:%2251c414a4-45ec-409b-87d7-d00525b246ce%22%7D,%7B%22size%22:%224%20oz%20scoop%22,%22id%22:%22eae0dc55-2472-461f-ae88-c58659608c22%22%7D%5D">
                Rocky Road
              </a>
            </td>
            <td>7/10 -- C Tier</td>
          </tr>
          <tr>
            <td>
              <a href="https://order.baskinrobbins.com/menu-details/pistachio-almond/generic?id=41d40ffa-0e51-48ca-b0ba-9a1f58682681&sizes=%5B%7B%22size%22:%222.5%20oz%20scoop%22,%22id%22:%2241d40ffa-0e51-48ca-b0ba-9a1f58682681%22%7D,%7B%22size%22:%224%20oz%20scoop%22,%22id%22:%22d1dff451-8b3c-4e61-bf47-f2ba9fb4aeda%22%7D%5D">
                Pistachio Almond
              </a>
            </td>
            <td>5/10 -- D Tier</td>
          </tr>
        </table>
        <br />
        <p>
          <i>* Click links to see Baskin Robbin's Description *</i>
        </p>
        <br />
        <br />
      </div>
    </>
  );
}
