/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  const { GoogleAIFileManager } = require("@google/generative-ai/server");
  
  const apiKey = "AIzaSyAf_zdD7hIYJilZX8K6WkRY1UYjexdF3DE";
  const genAI = new GoogleGenerativeAI(apiKey);
  const fileManager = new GoogleAIFileManager(apiKey);
  
  /**
   * Uploads the given file to Gemini.
   *
   * See https://ai.google.dev/gemini-api/docs/prompting_with_media
   */
  async function uploadToGemini(path, mimeType) {
    const uploadResult = await fileManager.uploadFile(path, {
      mimeType,
      displayName: path,
    });
    const file = uploadResult.file;
    console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
    return file;
  }
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(nomeArq) {
    // TODO Make these files available on the local file system
    // You may need to update the file paths
    const files = [
      await uploadToGemini("gemini/bonzaoSuper.jpg", "image/jpeg"),
      await uploadToGemini(nomeArq, "image/jpeg"),
    ];
  
    const parts = [
      {text: "input: "},
      {
        fileData: {
          mimeType: files[0].mimeType,
          fileUri: files[0].uri,
        },
      },
      {text: "output: {\n  \"loja\": \"Bonzão Supermercados\",\n  \"dataInicio\": \"28/12/2018\",\n  \"dataFim\": \"31/12/2018\",\n  \"produtos\": [\n    {\n      \"nome\": \"Vinho Campo Largo Tinto Suave\",\n      \"preco\": \"9,99\",\n      \"volume\": \"1L\",\n      \"unidade\": \"Litro\",\n      \"marca\": \"Campo Largo\"\n    },\n    {\n      \"nome\": \"Vinho Cantina da Serra\",\n      \"preco\": \"4,99\",\n      \"volume\": \"880ML\",\n      \"unidade\": \"ML\",\n      \"marca\": \"Cantina da Serra\"\n    },\n    {\n      \"nome\": \"Vinho Cantina da Serra\",\n      \"preco\": \"8,99\",\n      \"volume\": \"1,5L\",\n      \"unidade\": \"Litro\",\n      \"marca\": \"Cantina da Serra\"\n    }\n  ]"},
      {text: "input: "},
      {
        fileData: {
          mimeType: files[1].mimeType,
          fileUri: files[1].uri,
        },
      },
      {text: "output: "},
    ];
  
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
    });
    //console.log(result.response.text());
    let retorno;

    return retorno = result.response.text();
  }
  
  //run();

  module.exports={
    run
  }