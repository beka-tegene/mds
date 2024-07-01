import React from "react";
import img1 from "../../../assets/image.jpg";
import img2 from "../../../assets/image.jpeg";
import img3 from "../../../assets/images.jpeg";
import img4 from "../../../assets/img.jpeg";
import img5 from "../../../assets/bc.jpeg";
import img6 from "../../../assets/imgs.jpeg";
import img7 from "../../../assets/i.jpeg";
export const PetitionDetail = () => {
  
  return (
    <div className="flex flex-col">
      <div className="bg-[#11CE7C] flex flex-col items-center p-10 gap-4">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-2xl font-semibold max-sm:text-xl">Modern Day Slavery</h1>
          <p className="max-sm:text-xs">
            Demand All Fortune 1000 Companies to Take a Stand Against Modern Day
            Slavery (MDS)
          </p>
        </div>
        <div className="w-2/4 max-sm:w-full">
          <img src={img1} alt="bg" className="w-full rounded-md" />
          <div className="flex items-center justify-between">
            <div className="flex gap-2 max-sm:text-xs">
              <span className="font-semibold">Started</span>
              <span>June 29, 2024</span>
            </div>
            <div className="flex gap-2 max-sm:text-xs">
              <span className="font-semibold">Petition to</span>
              <span>PurposeBlack Foundation</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl font-semibold max-sm:text-xl">Why this petition matters</h1>
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden max-sm:w-8 max-sm:h-8">
            <img src={img2} alt="img2" className="w-full" />
          </div>
          <span className="font-semibold max-sm:text-sm">
            Started by{" "}
            <a href="" className="text-blue-600">
              Dr. Fisseha Eshetu Habtemariam
            </a>
          </span>
        </div>
        <p className="max-sm:text-xs">
          Demand All Fortune 1000 Companies to Take a Stand Against Modern Day
          Slavery (MDS).
        </p>

        <div className="max-sm:w-full">
          <iframe
            width="760"
            height="415"
            className="max-sm:w-full max-sm:h-[300px]"
            src="https://www.youtube.com/embed/EQUdqeAOUpY?si=1uMX_G6-pAiyW9H1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex items-center justify-between w-3/5 max-sm:text-xs max-sm:w-full">
          <p>
            <span className="text-[#FF0000] font-semibold">STOP</span> – The Cup
            of Blood!
          </p>
          <p>
            <span className="text-[#FF0000] font-semibold">STOP</span> – Modern
            Day Slavery (MDS)
          </p>
        </div>
      </div>
      <div className="grid grid-cols-5 max-sm:grid-cols-1 max-sm:px-10 gap-8 px-20 p-5">
        <div className="flex flex-col gap-4 col-span-3">
          <p>
            Every cup of coffee we drink so casually... It's a cup of blood.
          </p>
          <p>
            For many, coffee is simply a cup of good taste and aroma. But behind
            that simple pleasure lies an ugly story.
          </p>
          <p>
            With every cup we sip, we are supporting a system that whips the
            backs of farmers, as their hard work and dedication is exploited
            without fair compensation.
          </p>
          <p>
            Over 100 million farmers toil in inhumane conditions, with their
            labor lining the pockets of large corporations rather than improving
            their own lives.
          </p>
          <p>
            Modern-day slavery is a harsh reality for many coffee farmers around
            the world. These hardworking individuals often endure exploitative
            conditions, receiving meager wages for grueling labor.
          </p>
          <p>
            In distant lands, coffee farmers toil tirelessly, yet many live in
            poverty and face exploitation, human toil, economic injustice, and
            the struggle for a fair price. These farmers, the backbone of the
            coffee industry, are trapped in a cycle of Modern-Day Slavery while
            others reap the profits. Coffee importers, exporters, and shops plan
            their future profits, but the farmers can barely feed their families
            or educate their children.
          </p>
          <p>
            These innocent farmers are taken for granted, not because the market
            doesn't need them, but because middlemen exploit them. As we savor
            our morning coffee, remember that beyond each sip lies a story of
            Modern-Day Slavery (MDS). A cup of coffee that costs us five dollars
            might only bring the farmer a few cents. This vast disparity in
            price is a reflection of a system where power and profit are
            concentrated in the hands of a few, while the farmers who cultivate
            the beans bear the brunt of the labor.
          </p>
          <p>
            This imbalance echoes the exploitative practices of the past. Just
            as slaves toiled in cotton fields, earning little for their
            backbreaking work, modern coffee farmers are often trapped in a
            cycle of poverty, struggling to make ends meet.
          </p>

          <p>
            By addressing the root causes of exploitation, we aim to break the
            cycle of poverty and injustice that traps so many farmers.
          </p>
          <p>It's time to brew a change.</p>
          <p>
            It's time to ask: Can we enjoy our coffee without guilt?" Is there a
            way that supports fair trade and ethical practices? Do we have hope
            to stop Modern Day Slavery?
          </p>
          <p>
            The Answer is yes! If we Demand all fortune companies to take a
            stand and take actions TODAY, we can liberate 100 million farmers
            out of bondage.
          </p>
          <p>Hence here are our demands:</p>
          <ol>
            <li className="pl-3">
              <span className="pr-4 font-bold">1</span>
              Demand for every Fortune 1000 company to join the STOP Modern Day
              Slavery (MDS) movement and get listed on the STOP Modern Day
              Slavery Public Register (MDS-PR) of the movement.
            </li>
            <li className="pl-3">
              <span className="pr-4 font-bold">2</span>
              Demand for all Fortune 1000 companies to source and use only
              certified “Stop MDS, Direct from the Farmer (DDFI) and Campaign
              100+" coffee cups. The proceeds of these certified cups will go to
              finance the coffee farmers globally.
            </li>
            <li className="pl-3">
              <span className="pr-4 font-bold">3</span>
              Demand for all Fortune 1000 company workplaces to switch to “Stop
              MDS, DFFI Campaign 100+” certified coffee suppliers.
            </li>
            <li className="pl-3">
              <span className="pr-4 font-bold">4</span>
              Demand for all Fortune 1000 companies to become active supporters
              and advocates of the “Stop MDS, DFFI Campaign 100+” global
              movement.
            </li>
          </ol>
        </div>
        <div className="col-span-2 flex flex-col">
          <div>
            <img src={img3} alt="img4" />
          </div>
          <div className="flex-grow"></div>
          <div>
            <img src={img4} alt="img5" />
          </div>
          <div className="flex-grow"></div>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-20 max-sm:px-10">
        <p>
          Let us Stand in solidarity with these Farmers!!! Let us get them out
          of the fetters of Modern-Day Slavery by signing this petition and
          sharing the petition to at least 100 more people.
        </p>
        <p>
          You may also support this campaign by donating at:{" "}
          <a href="" className="text-blue-700 font-semibold">
            https://www.zeffy.com/donation-form/03f26fc0-b21e-474a-aefc-97832da2f4e8
          </a>
        </p>
        <p>or scan the QR code below.</p>
        <div>
          <img src={img5} alt="img6" />
        </div>
      </div>
      <div className="px-20 max-sm:px-10 grid grid-cols-3 gap-5">
        <iframe
          width="760"
          height="415"
          className="max-sm:w-full max-sm:h-[300px] col-span-2"
          src="https://www.youtube.com/embed/psEQD7-X6A8?si=lF_4i-ngKWV8mQqQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="flex flex-col gap-2 col-span-1">
          <p>Thank You for being part of this noble journey.</p>
          <p>STOP Modern Day Initiative Team</p>
          <p>Organizer Information </p>
          <p>
            This campaign is organized by PurposeBlack Foundation’s: Campaign
            100+ and Invest in Poverty Initiatives (IPI).
          </p>
          <p>Contact</p>
          <p>PurposeBlack Foundation</p>
          <p>STOP Modern Day Slavey Movement</p>
          <p>Campaign 100+</p>
          <p>Invest in Poverty Initiative</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 px-20 py-5 max-sm:px-10 max-sm:grid-cols-1">
        <div className="flex flex-col gap-2">
          <p>2600 Virginia Ave MW</p>
          <p>Washington DC, 20037</p>
          <p>Tel: +1 (202) 735-4262</p>
          <p>Email: info@ipimembership.com</p>
          <p>
            Website: <a href="" className=" text-blue-700">https://ipiuniverse.com/</a>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-20 max-sm:px-10">
        <img src={img6} alt="img" className="w-3/4"/>
        <img src={img7} alt="img" className="w-2/4"/>
      </div>



     
    </div>
  );
};
