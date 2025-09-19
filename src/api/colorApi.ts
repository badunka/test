export async function fetchColorName(hex: string): Promise<string> {
  try {
    const response = await fetch(`https://www.thecolorapi.com/id?hex=${hex}`);
    if (!response.ok) {
      throw new Error("Failed to fetch color");
    }
    const data = await response.json();
    return data.name.value as string;
  } catch (error) {
    console.error(error);
    return "Unknown color";
  }
}
