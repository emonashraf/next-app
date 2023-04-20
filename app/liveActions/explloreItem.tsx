import Data from "../data/db";
import ProductCardV3 from "../components/ProductCardV3";
import ButtonGradient from "../components/btn/ButtonGradient";

function ExploreItem() {
  const cardData = Data?.ProductCard;
  return (
    <div className="ptb">
      <div className="container mx-auto px-4">
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {cardData.slice(0, 12).map((item: any) => (
            <div key={item?.id}>
              <ProductCardV3
                img={item?.img}
                icon={item?.icon}
                text={item?.text}
                title={item?.title}
                avatarImgV2={item?.avatarImgV2}
                email={item?.email}
                newBid={item?.newBid}
                buttonHref={item?.buttonHref}
                buttonIcon={item?.buttonIcon}
                button={item?.button}
              />
            </div>
          ))}
        </div>
        <div className="center mt-[3.75rem] ">
          <ButtonGradient name="Lode More " href="/" />
        </div>
      </div>
    </div>
  );
}

export default ExploreItem;
