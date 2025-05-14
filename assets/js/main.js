// Query Selectors
const doc = document;
const getId = "getElementById";
const shareUrl = doc[getId]("shareUrl");
const directUrl = doc[getId]("directUrl");
const generateBtn = doc[getId]("generateBtn");
const copyBtn = doc[getId]("copyBtn");
const clearBtn = doc[getId]("clearBtn");
const directUrlHidden = doc[getId]("directUrlHidden");

// Regex
const shareUrlRegex = /^https:\/\/drive\.google\.com\/(file|folderview)\//;

// Generate Button
generateBtn.addEventListener("click", function () {
   if (shareUrl.value === "") {
      window.alert("Oops, The sharing url is empty.");
      return false;
   } else if (!shareUrlRegex.test(shareUrl.value)) {
      window.alert("Oops, The sharing url you provided is invalid.");
      return false;
   } else {
      generateBtn.innerHTML = "Generating...";
      generateBtn.disabled = true;
      setTimeout(() => {
         directUrl.value = shareUrl.value
            .replace("/file/d/", "/uc?export=download&id=")
            .replace("/view?usp=sharing", "")
            .replace("/view?usp=share_link", "")
            .replace("/view?usp=drivesdk", "");
         generateBtn.innerHTML = "Generate";
         generateBtn.disabled = false;
         directUrlHidden.classList.remove("hidden");
      }, 1000);
   }
});

// Copy Button
copyBtn.addEventListener("click", function () {
   if (shareUrl.value === "") {
      window.alert("Oops, The sharing url is empty.");
      return false;
   } else if (!shareUrlRegex.test(shareUrl.value)) {
      window.alert("Oops, The sharing url you provided is invalid.");
      return false;
   } else {
      copyBtn.innerHTML = "Copying...";
      copyBtn.disabled = true;
      setTimeout(() => {
         copyBtn.innerHTML = "Copy";
         copyBtn.disabled = false;
      }, 1000);
      directUrl.select();
      document.execCommand("copy");
   }
});

// Clear Button
clearBtn.addEventListener("click", function () {
   if (shareUrl.value === "") {
      window.alert("Oops, The sharing url is empty.");
      return false;
   } else {
      clearBtn.innerHTML = "Clearing...";
      clearBtn.disabled = true;
      setTimeout(() => {
         shareUrl.value = "";
         directUrl.value = "";
         clearBtn.innerHTML = "Clear";
         clearBtn.disabled = false;
         directUrlHidden.classList.add("hidden");
      }, 1000);
   }
});