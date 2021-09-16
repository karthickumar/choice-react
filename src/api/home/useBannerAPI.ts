import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firebasedb } from "../../firebase/index";

function useBannerAPI() {
  const [bannerData, setBannerData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBannerInfo = () => {
    const bannerData = getDocs(collection(firebasedb, "homebanner"))
      .then((snapshot) => {
        const bannerInfo = [];
        snapshot.forEach((doc) => bannerInfo.push(doc.data()));
        return bannerInfo;
      }).then(data => {
          if (data.length) {
              setBannerData(data)
          }
          else {
            setBannerData([])
          }
      })
  };

    useEffect(() => {
        console.log("[bannerData} -", bannerData)
     }, [bannerData])
    
  return {
    bannerData,
    isLoading,
    getBannerInfo,
  };
}

export { useBannerAPI };
