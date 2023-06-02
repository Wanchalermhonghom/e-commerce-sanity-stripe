'use client';

import { BiSearch } from 'react-icons/bi';

export default function Search() {
  return (
    <div className="flex gap-2 p-2 rounded-lg border-2">
      <input
        className="border-none bg-transparent border-inherit outline-none"
        type="search"
        placeholder="search"
      />
      <button className="" onClick={(event) => {}}>
        <BiSearch></BiSearch>
      </button>
    </div>
  );
}
