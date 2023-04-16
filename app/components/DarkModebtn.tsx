"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { TbSun, TbMoonStars } from "react-icons/tb";
function DarkModebtn() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "dark" ? (
        <TbSun
          className=" h-8 w-8 cursor-pointer text-yellow-400"
          onClick={() => setTheme("light")}
        />
      ) : (
        <TbMoonStars
          className=" h-8 w-8 cursor-pointer text-blue-300"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default DarkModebtn;
