import Image from "next/image";
import React from "react";

function EmailAvatar({ avatarImgV2 }: any) {
  return (
    <div>
      <div className="flex -space-x-1 ">
        <Image
          className="inline-block h-4 w-4 rounded-full ring-2 ring-white "
          src={avatarImgV2}
          alt="email"
        />
        <Image
          className="inline-block h-4 w-4 rounded-full ring-2 ring-white"
          src={avatarImgV2}
          alt="email"
        />
        <Image
          className="inline-block h-4 w-4 rounded-full ring-2 ring-white"
          src={avatarImgV2}
          alt="email"
        />
      </div>
    </div>
  );
}

export default EmailAvatar;
