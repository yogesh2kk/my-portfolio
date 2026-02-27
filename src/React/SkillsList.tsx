import React, { useState } from "react";

const CategoryIcons: Record<string, React.ReactNode> = {
  "Data Science & Machine Learning": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M4 6.5C4 4.567 5.567 3 7.5 3H20v2H7.5C6.672 5 6 5.672 6 6.5S6.672 8 7.5 8H20v2H7.5C5.567 10 4 8.433 4 6.5ZM4 17.5C4 15.567 5.567 14 7.5 14H20v2H7.5c-.828 0-1.5.672-1.5 1.5S6.672 19 7.5 19H20v2H7.5C5.567 21 4 19.433 4 17.5ZM4 12h16v2H4v-2Z"></path>
    </svg>
  ),

  "Time Series & Forecasting": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M3 3h2v16h16v2H3V3Zm6 12 3-4 3 2 4-6 2 1-6 9-3-2-3 4-2-1Z"></path>
    </svg>
  ),

  "Quantitative Finance & Econometrics": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M3 4h18v2H3V4Zm2 4h14v12H5V8Zm2 2v8h10v-8H7Zm1 6h2v-5H8v5Zm3 0h2v-3h-2v3Zm3 0h2v-7h-2v7Z"></path>
    </svg>
  ),

  "Data Analytics, SQL & BI": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M4 5c0-1.657 3.582-3 8-3s8 1.343 8 3v14c0 1.657-3.582 3-8 3s-8-1.343-8-3V5Zm8-1c-3.866 0-6 .99-6 1s2.134 1 6 1 6-.99 6-1-2.134-1-6-1Zm0 16c-3.866 0-6 .99-6 1s2.134 1 6 1 6-.99 6-1-2.134-1-6-1Zm0-2c3.866 0 6-.99 6-1V7.9c-1.6.8-4.1 1.1-6 1.1s-4.4-.3-6-1.1V17c0 .01 2.134 1 6 1Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  // ✅ UPDATED to reflect YOUR actual project experience:
  // - Walmart forecasting (classical + ML + deep learning)
  // - Volatility forecasting (GARCH, backtesting, API, SQLite, OOP, TDD)
  // - Bankruptcy prediction (imbalance handling, pipelines, CV, GridSearch)
  // - Recommendation system (similarity / feature workflows)
  const skills: Record<string, string[]> = {
    "Data Science & Machine Learning": [
      "End-to-end ML pipelines (imputation, preprocessing, model training) with reproducible experimentation in scikit-learn",
      "Handling imbalanced classification with under/over-sampling and threshold-based evaluation (precision/recall trade-offs)",
      "Model selection and tuning using k-fold cross-validation + GridSearchCV across tree-based and ensemble methods",
      "Building recommendation workflows using feature engineering + similarity scoring to surface personalized results",
    ],

    "Time Series & Forecasting": [
      "Time-series feature engineering and structured backtesting to compare approaches fairly across multiple series",
      "Classical forecasting baselines and statistical modeling (trend/seasonality analysis, ARIMA-style approaches when appropriate)",
      "Machine learning forecasting using engineered lag/rolling features with strong validation discipline",
      "Deep learning forecasting (LSTM-style sequence models) and model comparison against classical baselines",
    ],

    "Quantitative Finance & Econometrics": [
      "Volatility modeling using GARCH-family workflows: data wrangling, training, diagnostics, and forecast generation",
      "Econometric thinking for financial data: assumptions, uncertainty, and interpretable model behavior",
      "Production-minded analytics: saving/loading models, versionable pipelines, and reliable evaluation for financial series",
      "Building data services around models (FastAPI + typed request/response objects) to support reusable inference",
    ],

    "Data Analytics, SQL & BI": [
      "Data wrangling and exploratory analysis with clear visuals to communicate findings and model behavior",
      "Working with structured storage for analysis (SQLite repositories / SQL-style workflows) to keep data reliable and repeatable",
      "Delivering stakeholder-friendly outputs: concise narratives, charts, and summaries that support decisions",
      "Defensive programming practices to make data pipelines robust (validation, error handling, clean interfaces)",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        How I Work with Data
      </h3>

      <p className="text-[var(--white-icon)] opacity-80 mt-2 md:mt-0 mb-5 max-w-xl">
        A snapshot of the methods I use in real projects—covering analytics,
        modeling, forecasting, and production-style workflows.
      </p>

      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[420px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {/* ✅ lock icon container width and prevent shrinking */}
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  {CategoryIcons[category] ?? (
                    <div className="w-6 h-6 rounded-md bg-[var(--sec)] opacity-30" />
                  )}
                </div>

                <div className="flex items-center gap-2 flex-grow justify-between">
                  {/* ✅ allow long titles to wrap */}
                  <div className="min-w-0 md:max-w-none overflow-hidden">
                    <span className="block whitespace-normal text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[650px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="pl-1 leading-5">•</span>
                      <li className="pl-3 leading-5">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;