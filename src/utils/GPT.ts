import axios from "axios";

async function GPT(index: any) {
  const API_KEY = "";
  const model = "gpt-3.5-turbo";
  const temp = index.main.temp;
  const humidity = index.main.humidity;
  const description = index.weather[0].description;

  const query = `기온:${temp}, 습도${humidity}, 기상:${description} 다음이 현재 날씨, 존댓말로 입을 옷 조합 짧게 추천`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: model,
        messages: [{ role: "user", content: query }],
        max_tokens: 200,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching data from OpenAI API:", error);
    return "추천을 가져오는 중 오류가 발생했습니다.";
  }
}

export default GPT;
