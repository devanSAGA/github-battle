import React from "react";

function SelectLanguage(props) {
  var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="languages">
      {languages.map((lang, index) => {
        return (
          <li
            style={lang === props.selectedLanguage ? { color: "red" } : null}
            onClick={props.onSelect.bind(null, lang)}
            key={index}
          >
            {lang}
          </li>
        );
      })}
    </ul>
  );
}

export default SelectLanguage;
