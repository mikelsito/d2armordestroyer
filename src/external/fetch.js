import { apiKey } from "./key";

const gjallahorn = async () => {
  const res = await fetch(
    "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/",
    {
      credentials: "include",
      headers: {
        "X-API-Key": apiKey,
      },
    }
  );

  const data = await res.json();

  console.log(data);
  return data;
};

export { gjallahorn };
