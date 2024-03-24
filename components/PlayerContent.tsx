"use client";

import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";

import { Song } from "@/types";
import LikeButton from "./LikeButton";
import MediaItem from "./MediaItem";
import Slider from "./Slider";

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const Icon = true ? BsPauseFill : BsPlayFill;
  const VolumeIcon = true ? HiSpeakerXMark : HiSpeakerWave;

  return (
    <div className="grid h-full grid-cols-2 md:grid-cols-3">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>

      <div className="col-auto flex w-full items-center justify-end md:hidden">
        <div
          onClick={() => {}}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white p-1"
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>
      <div className="hidden h-full w-full max-w-[722px] items-center justify-center gap-x-6 md:flex">
        <AiFillStepBackward
          onClick={() => {}}
          size={30}
          className="cursor-pointer text-neutral-400 transition hover:text-white"
        />

        <div
          onClick={() => {}}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white p-1"
        >
          <Icon size={30} className="text-black" />
        </div>

        <AiFillStepForward
          onClick={() => {}}
          size={30}
          className="cursor-pointer text-neutral-400 transition hover:text-white"
        />
      </div>

      <div className="hidden w-full justify-end pr-2 md:flex">
        <div className="2-[120px] flex items-center gap-x-2">
          <VolumeIcon onClick={() => {}} className="cursor-pointer" size={34} />
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
