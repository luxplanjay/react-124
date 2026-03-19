import { useState } from "react";

interface Inventory {
  bmw: number;
  audi: number;
  mercedes: number;
  volkswagen: number;
  skoda: number;
  lexus: number;
}

export default function InventoryTracker() {
  const [inventory, setInventory] = useState<Inventory>({
    bmw: 0,
    audi: 0,
    mercedes: 0,
    volkswagen: 0,
    skoda: 0,
    lexus: 0,
  });

  // keyof Inventory = "bmw" | "audi" | "mercedes" | ...
  const udpateInventory = (brand: keyof Inventory) => {
    setInventory({
      ...inventory,
      [brand]: inventory[brand] + 1,
    });
  };

  return (
    <div>
      <h2>InventoryTracker</h2>
      <button onClick={() => udpateInventory("bmw")}>
        BMW {inventory.bmw}
      </button>
      <button onClick={() => udpateInventory("audi")}>
        Audi {inventory.audi}
      </button>
      <button onClick={() => udpateInventory("mercedes")}>
        Mercedes {inventory.mercedes}
      </button>
      <button onClick={() => udpateInventory("volkswagen")}>
        Volkswagen {inventory.volkswagen}
      </button>
      <button onClick={() => udpateInventory("skoda")}>
        Skoda {inventory.skoda}
      </button>
      <button onClick={() => udpateInventory("lexus")}>
        Lexus {inventory.lexus}
      </button>
    </div>
  );
}
