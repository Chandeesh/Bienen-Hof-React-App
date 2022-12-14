import React, { useState, useEffect } from "react";
import UserService from "../services/user-service";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [content, setContent] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data.me);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);
  return (
    <div className="col-md-12" style={{ paddingLeft: '170px'}}>

      <div class="container marketing" style={{ paddingTop: 50}}>
        <div class="row">
          <div class="row featurette">  
            <div class="col-md-7">
              <h2 class="featurette-heading">{t("beesYear")}</h2>
              <p class="lead">{t("beesYearContent")}</p>
            </div>
            <div class="col-md-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 512 512"
                version="1.1"
                viewBox="0 0 800 512"
                xmlSpace="preserve"
              >
                <path
                  fill="#FFC61B"
                  d="M460.878 492.991H51.122c-20.603 0-37.364-16.76-37.364-37.362V135.415c0-8.441 6.843-15.285 15.285-15.285s15.285 6.845 15.285 15.285v320.213c0 3.745 3.048 6.791 6.793 6.791h409.756c3.745 0 6.793-3.046 6.793-6.791V257.711c0-8.441 6.843-15.285 15.285-15.285s15.285 6.845 15.285 15.285v197.918c.002 20.603-16.759 37.362-37.362 37.362z"
                ></path>
                <path
                  fill="#FEE187"
                  d="M496.715 164.731V82.607c0-12.193-9.885-22.077-22.078-22.077H37.364c-12.193-.002-22.078 9.884-22.078 22.077v82.126h481.429v-.002z"
                ></path>
                <g fill="#FFC61B">
                  <path d="M496.715 180.018H15.285C6.843 180.018 0 173.173 0 164.733V82.607c0-20.603 16.76-37.362 37.364-37.362h437.272c20.604 0 37.364 16.76 37.364 37.362v82.126c0 8.44-6.843 15.285-15.285 15.285zM30.571 149.447h450.858v-66.84c0-3.745-3.048-6.791-6.793-6.791H37.364c-3.745 0-6.793 3.046-6.793 6.791v66.84z"></path>
                  <path d="M76.774 104.099c-8.442 0-15.285-6.845-15.285-15.285v-54.52c0-8.441 6.843-15.285 15.285-15.285S92.06 25.854 92.06 34.294v54.519c0 8.441-6.844 15.286-15.286 15.286zM166.387 104.099c-8.442 0-15.285-6.845-15.285-15.285v-54.52c0-8.441 6.843-15.285 15.285-15.285s15.285 6.845 15.285 15.285v54.519c0 8.441-6.843 15.286-15.285 15.286zM345.613 104.099c-8.442 0-15.285-6.845-15.285-15.285v-54.52c0-8.441 6.843-15.285 15.285-15.285s15.285 6.845 15.285 15.285v54.519c.001 8.441-6.843 15.286-15.285 15.286zM255.999 104.099c-8.442 0-15.285-6.845-15.285-15.285v-54.52c0-8.441 6.843-15.285 15.285-15.285s15.285 6.845 15.285 15.285v54.519c.001 8.441-6.843 15.286-15.285 15.286zM435.226 104.099c-8.442 0-15.285-6.845-15.285-15.285v-54.52c0-8.441 6.843-15.285 15.285-15.285s15.285 6.845 15.285 15.285v54.519c0 8.441-6.843 15.286-15.285 15.286zM254.162 359.974a15.286 15.286 0 01-10.808-4.477l-47.382-47.382c-5.969-5.969-5.969-15.648 0-21.618 5.969-5.967 15.648-5.966 21.617 0l36.572 36.574 69.637-69.637c5.969-5.967 15.648-5.967 21.618 0 5.969 5.969 5.969 15.648 0 21.618l-80.446 80.446a15.287 15.287 0 01-10.808 4.476z"></path>
                  <path d="M360.672 416.568H151.328c-8.442 0-15.285-6.845-15.285-15.285V237.839c0-8.441 6.843-15.285 15.285-15.285h94.991c8.442 0 15.285 6.845 15.285 15.285 0 8.441-6.843 15.285-15.285 15.285h-79.706v132.875h178.774V320.57c0-8.441 6.843-15.285 15.285-15.285s15.285 6.845 15.285 15.285v80.715c.001 8.44-6.842 15.283-15.285 15.283z"></path>
                </g>
              </svg>
            </div>
          </div>

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">{t("beesHealth")}</h2>
              <p class="lead">{t("beesHealthContent")}</p>
            </div>
            <div class="col-md-5 order-md-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 512 512"
                version="1.1"
                viewBox="0 0 800 512"
                xmlSpace="preserve"
              >
                <path
                  fill="#FEE187"
                  d="M348.475 290.822L291.92 290.822 291.92 234.268 220.079 234.268 220.079 290.822 163.524 290.822 163.524 362.663 220.079 362.663 220.079 419.218 291.92 419.218 291.92 362.663 348.475 362.663z"
                ></path>
                <g fill="#FFC61B">
                  <path d="M291.92 434.411h-71.841c-8.39 0-15.193-6.802-15.193-15.193v-41.362h-41.362c-8.39 0-15.193-6.802-15.193-15.193v-71.841c0-8.391 6.803-15.193 15.193-15.193h41.362v-41.362c0-8.391 6.804-15.193 15.193-15.193h71.841c8.39 0 15.193 6.802 15.193 15.193v41.362h41.362c8.39 0 15.193 6.802 15.193 15.193v71.841c0 8.391-6.804 15.193-15.193 15.193h-41.362v41.362c0 8.391-6.802 15.193-15.193 15.193zm-56.648-30.386h41.455v-41.362c0-8.391 6.803-15.193 15.193-15.193h41.362v-41.455H291.92c-8.39 0-15.193-6.802-15.193-15.193V249.46h-41.455v41.362c0 8.391-6.803 15.193-15.193 15.193h-41.362v41.455h41.362c8.39 0 15.193 6.802 15.193 15.193v41.362z"></path>
                  <path d="M402.614 512H109.386c-8.39 0-15.193-6.802-15.193-15.193V231.748c0-33.764 19.771-64.808 50.365-79.088l43.887-20.482V69.776c0-8.391 6.804-15.193 15.193-15.193h104.724c8.39 0 15.193 6.802 15.193 15.193v40.999c0 8.391-6.804 15.193-15.193 15.193s-15.193-6.802-15.193-15.193V84.969h-74.337v56.885c0 5.903-3.418 11.27-8.768 13.768l-52.654 24.573c-19.944 9.309-32.831 29.545-32.831 51.554v249.866h262.842V231.748c0-22.009-12.887-42.245-32.831-51.554-7.604-3.549-10.89-12.589-7.341-20.193 3.548-7.603 12.588-10.89 20.193-7.341 30.596 14.28 50.365 45.324 50.365 79.088v265.059c0 8.391-6.803 15.193-15.193 15.193z"></path>
                  <path d="M332.481 84.969H179.516c-8.39 0-15.193-6.802-15.193-15.193s6.804-15.193 15.193-15.193h152.965c8.39 0 15.193 6.802 15.193 15.193s-6.802 15.193-15.193 15.193zM285.955 195.322h-151.5c-8.39 0-15.193-6.802-15.193-15.193s6.804-15.193 15.193-15.193h151.502c8.39 0 15.193 6.802 15.193 15.193s-6.804 15.193-15.195 15.193z"></path>
                </g>
                <path fill="#FEE187" d="M226.925 15.193H285.069V69.776H226.925z"></path>
                <path
                  fill="#FFC61B"
                  d="M285.069 84.969h-58.141c-8.39 0-15.193-6.802-15.193-15.193V15.193C211.735 6.802 218.538 0 226.928 0h58.141c8.39 0 15.193 6.802 15.193 15.193v54.583c0 8.391-6.802 15.193-15.193 15.193zm-42.947-30.386h27.755V30.386h-27.755v24.197z"
                ></path>
              </svg>
            </div>
          </div>


          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">{t("myBees")}</h2>
              <p class="lead">{t("myBeesContent")}</p>
            </div>
            <div class="col-md-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 511.999 511.999"
                version="1.1"
                viewBox="0 0 800 511.999"
                xmlSpace="preserve"
              >
                <g fill="#754F1E">
                  <path d="M290.209 72.46c-1.092 0-2.2-.21-3.27-.653a8.551 8.551 0 01-4.628-11.175l16.366-39.51c7.219-17.429 27.273-25.739 44.701-18.515 17.428 7.22 25.733 27.273 18.514 44.702a8.55 8.55 0 01-11.175 4.628 8.551 8.551 0 01-4.628-11.175c3.609-8.715-.544-18.741-9.258-22.352-8.718-3.607-18.741.545-22.35 9.259l-16.366 39.51a8.56 8.56 0 01-7.906 5.281zM221.79 72.46a8.555 8.555 0 01-7.905-5.282l-16.365-39.51c-3.609-8.715-13.639-12.866-22.35-9.259-8.714 3.61-12.867 13.638-9.258 22.352a8.553 8.553 0 01-4.629 11.175c-4.362 1.809-9.367-.263-11.176-4.628-7.219-17.428 1.086-37.482 18.514-44.702 17.431-7.22 37.482 1.088 44.702 18.515l16.365 39.51a8.553 8.553 0 01-4.629 11.175 8.518 8.518 0 01-3.269.654z"></path>
                </g>
                <circle cx="255.995" cy="123.773" r="76.978" fill="#F9C900"></circle>
                <g fill="#754F1E">
                  <circle cx="230.336" cy="81.008" r="8.553"></circle>
                  <circle cx="281.655" cy="81.008" r="8.553"></circle>
                </g>
                <path
                  fill="#F9AA0C"
                  d="M290.212 175.095c-42.514 0-76.978-34.465-76.978-76.978 0-17.399 5.779-33.446 15.514-46.339-29.059 11.006-49.727 39.081-49.727 71.998 0 42.513 34.464 76.978 76.978 76.978 25.114 0 47.413-12.031 61.464-30.64a76.745 76.745 0 01-27.251 4.981z"
                ></path>
                <path
                  fill="#836134"
                  d="M136.256 303.393c0-66.133 53.611-119.744 119.744-119.744s119.744 53.611 119.744 119.744c0 56.605-87.726 172.965-113.004 205.317-3.427 4.386-10.053 4.386-13.48 0-25.278-32.353-113.004-148.713-113.004-205.317z"
                ></path>
                <path
                  fill="#754F1E"
                  d="M187.574 334.274c0-66.133 53.611-119.744 119.744-119.744a119.77 119.77 0 0134.07 4.926c-21.724-22.098-51.954-35.808-85.389-35.808-66.133 0-119.744 53.611-119.744 119.744 0 56.605 87.726 172.965 113.004 205.317 3.427 4.386 10.053 4.386 13.48 0 2.094-2.681 4.627-5.951 7.495-9.705-35.166-49.083-82.66-123.081-82.66-164.73z"
                ></path>
                <g fill="#F9CE19">
                  <path d="M375.744 303.393c0-15.069-2.792-29.484-7.872-42.766H144.128c-5.081 13.282-7.872 27.697-7.872 42.766 0 2.718.206 5.576.594 8.553h238.3c.387-2.978.594-5.836.594-8.553zM154.277 363.265c8.022 16.728 18.043 34.285 28.653 51.319h146.139c10.609-17.034 20.631-34.591 28.653-51.319H154.277z"></path>
                </g>
                <g fill="#FAB224">
                  <path d="M144.128 260.627c-5.081 13.282-7.872 27.697-7.872 42.766 0 2.718.206 5.576.594 8.553h52.811c3.602-19.094 11.731-36.588 23.237-51.319h-68.77zM154.277 363.265c8.022 16.728 18.043 34.285 28.653 51.319h33.191c-9.819-17.94-18.065-35.561-23.132-51.319h-38.712z"></path>
                </g>
                <g fill="#F1EDE8">
                  <path d="M247.446 183.649s137.103-76.978 179.616-76.978 76.978 34.465 76.978 76.978-34.465 76.978-76.978 76.978-179.616-76.978-179.616-76.978z"></path>
                  <path d="M264.553 183.649S127.45 106.671 84.937 106.671 7.958 141.135 7.958 183.649s34.464 76.978 76.978 76.978 179.617-76.978 179.617-76.978z"></path>
                </g>
                <g fill="#E3DCD2">
                  <path d="M232.35 166.263c-36.813 19.881-130.661 68.703-164.519 68.703-21.146 0-40.295-8.531-54.208-22.333 11.451 28.143 39.057 47.993 71.314 47.993 42.514 0 179.616-76.978 179.616-76.978s-12.991-7.293-32.203-17.385z"></path>
                  <path d="M279.65 166.263c36.813 19.881 130.661 68.703 164.519 68.703 21.146 0 40.295-8.531 54.208-22.333-11.451 28.143-39.057 47.993-71.314 47.993-42.514 0-179.616-76.978-179.616-76.978s12.991-7.293 32.203-17.385z"></path>
                </g>
              </svg>
            </div>
          </div>

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">{t("basicBeekeeping")}</h2>
              <p class="lead">{t("basicBeekeepingContent")}</p>
            </div>
            <div class="col-md-5 order-md-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 512 512"
                version="1.1"
                viewBox="0 0 800 512"
                xmlSpace="preserve"
              >
                <g fill="#FFE100">
                  <path
                    d="M132.12 417.133c10.24 17.067 23.04 34.133 37.547 51.2h170.667c14.507-17.067 26.453-34.133 37.547-51.2H132.12zM402.627 144.067H107.373c-5.973 15.36-11.947 32.427-15.36 51.2h327.68c-5.12-18.774-10.24-35.84-17.066-51.2M377.88 92.867c-19.627-32.427-37.547-51.2-37.547-51.2H169.667s-17.92 18.773-37.547 51.2h245.76zM196.12 331.8H94.573c4.267 17.067 11.093 34.133 18.773 51.2H255c-29.867 0-54.613-22.187-58.88-51.2M313.88 331.8C309.613 360.813 284.867 383 255 383h140.8c8.533-17.067 14.507-34.133 18.773-51.2H313.88zM423.96 229.4H86.04c-1.707 16.213-1.707 33.28 0 51.2h127.147c11.093-10.24 25.6-17.067 41.813-17.067s30.72 6.827 41.813 17.067H423.96c1.707-17.92 1.707-34.987 0-51.2"
                    transform="translate(1 1)"
                  ></path>
                </g>
                <g fill="#FFA800">
                  <path
                    d="M352.28 417.133c-10.24 17.067-23.04 34.133-37.547 51.2h25.6c14.507-17.067 26.453-34.133 37.547-51.2h-25.6zM402.627 144.067h-25.6c5.973 15.36 11.947 32.427 15.36 51.2h25.6c-3.414-18.774-9.387-35.84-15.36-51.2M340.333 41.667h-25.6s17.92 18.773 37.547 51.2h25.6c-19.627-32.427-37.547-51.2-37.547-51.2M389.827 331.8c-4.267 17.067-11.093 34.133-18.773 51.2h25.6c8.533-17.067 14.507-34.133 18.773-51.2h-25.6zM423.96 229.4h-25.6c1.707 16.213 1.707 33.28 0 51.2h25.6c1.707-17.92.853-34.987 0-51.2"
                    transform="translate(1 1)"
                  ></path>
                </g>
                <g fill="#FFF">
                  <path
                    d="M157.72 417.133c10.24 17.067 23.04 34.133 37.547 51.2h-25.6c-14.507-17.067-26.453-34.133-37.547-51.2h25.6zM106.52 144.067h25.6c-5.973 15.36-11.947 32.427-15.36 51.2h-25.6c3.413-18.774 9.387-35.84 15.36-51.2M169.667 41.667h25.6s-17.92 18.773-37.547 51.2h-25.6c19.627-32.427 37.547-51.2 37.547-51.2M120.173 331.8c4.267 17.067 11.093 34.133 18.773 51.2h-25.6c-8.533-17.067-14.507-34.133-18.773-51.2h25.6zM86.04 229.4h25.6c-1.707 16.213-1.707 33.28 0 51.2h-25.6c-2.56-17.92-1.707-34.987 0-51.2"
                    transform="translate(1 1)"
                  ></path>
                </g>
                <path
                  fill="#FDCC00"
                  d="M340.333 41.667H169.667c-9.387 0-17.067-7.68-17.067-17.067s7.68-17.067 17.067-17.067h170.667c9.387 0 17.067 7.68 17.067 17.067-.001 9.387-7.681 17.067-17.068 17.067"
                  transform="translate(1 1)"
                ></path>
                <path
                  fill="#FFA800"
                  d="M340.333 7.533h-25.6c9.387 0 17.067 7.68 17.067 17.067s-7.68 17.067-17.067 17.067h25.6c9.387 0 17.067-7.68 17.067-17.067s-7.68-17.067-17.067-17.067"
                  transform="translate(1 1)"
                ></path>
                <path
                  fill="#FFF"
                  d="M169.667 7.533h25.6c-9.387 0-17.067 7.68-17.067 17.067s7.68 17.067 17.067 17.067h-25.6c-9.387 0-17.067-7.68-17.067-17.067s7.68-17.067 17.067-17.067"
                  transform="translate(1 1)"
                ></path>
                <path
                  fill="#FDCC00"
                  d="M340.333 502.467H169.667c-9.387 0-17.067-7.68-17.067-17.067s7.68-17.067 17.067-17.067h170.667c9.387 0 17.067 7.68 17.067 17.067-.001 9.387-7.681 17.067-17.068 17.067"
                  transform="translate(1 1)"
                ></path>
                <path
                  fill="#FFA800"
                  d="M340.333 468.333h-25.6c9.387 0 17.067 7.68 17.067 17.067s-7.68 17.067-17.067 17.067h25.6c9.387 0 17.067-7.68 17.067-17.067s-7.68-17.067-17.067-17.067"
                  transform="translate(1 1)"
                ></path>
                <path
                  fill="#FFF"
                  d="M169.667 468.333h25.6c-9.387 0-17.067 7.68-17.067 17.067s7.68 17.067 17.067 17.067h-25.6c-9.387 0-17.067-7.68-17.067-17.067s7.68-17.067 17.067-17.067"
                  transform="translate(1 1)"
                ></path>
                <g fill="#FDCC00">
                  <path
                    d="M434.2 229.4H75.8c-9.387 0-17.067-7.68-17.067-17.067s7.68-17.067 17.067-17.067h358.4c9.387 0 17.067 7.68 17.067 17.067S443.587 229.4 434.2 229.4M400.067 417.133H109.933c-9.387 0-17.067-7.68-17.067-17.067s7.68-17.067 17.067-17.067h290.133c9.387 0 17.067 7.68 17.067 17.067s-7.68 17.067-17.066 17.067"
                    transform="translate(1 1)"
                  ></path>
                </g>
                <g fill="#FFA800">
                  <path
                    d="M434.2 195.267h-25.6c9.387 0 17.067 7.68 17.067 17.067S417.987 229.4 408.6 229.4h25.6c9.387 0 17.067-7.68 17.067-17.067s-7.68-17.066-17.067-17.066M400.067 383h-25.6c9.387 0 17.067 7.68 17.067 17.067s-7.68 17.067-17.067 17.067h25.6c9.387 0 17.067-7.68 17.067-17.067S409.453 383 400.067 383"
                    transform="translate(1 1)"
                  ></path>
                </g>
                <g fill="#FFF">
                  <path
                    d="M109.933 383h25.6c-9.387 0-17.067 7.68-17.067 17.067s7.68 17.067 17.067 17.067h-25.6c-9.387 0-17.067-7.68-17.067-17.067S100.547 383 109.933 383M75.8 195.267h25.6c-9.387 0-17.067 7.68-17.067 17.067S92.013 229.4 101.4 229.4H75.8c-9.387 0-17.067-7.68-17.067-17.067s7.68-17.066 17.067-17.066"
                    transform="translate(1 1)"
                  ></path>
                </g>
                <path
                  fill="#FDCC00"
                  d="M408.6 144.067H101.4c-14.507 0-25.6-11.093-25.6-25.6 0-14.507 11.093-25.6 25.6-25.6h307.2c14.507 0 25.6 11.093 25.6 25.6 0 14.506-11.093 25.6-25.6 25.6"
                  transform="translate(1 1)"
                ></path>
                <path
                  fill="#FFA800"
                  d="M408.6 92.867H383c14.507 0 25.6 11.093 25.6 25.6s-11.093 25.6-25.6 25.6h25.6c14.507 0 25.6-11.093 25.6-25.6s-11.093-25.6-25.6-25.6"
                  transform="translate(1 1)"
                ></path>
                <path
                  fill="#FFF"
                  d="M101.4 92.867H127c-14.507 0-25.6 11.093-25.6 25.6s11.093 25.6 25.6 25.6h-25.6c-14.507 0-25.6-11.093-25.6-25.6s11.093-25.6 25.6-25.6"
                  transform="translate(1 1)"
                ></path>
                <path
                  fill="#FDCC00"
                  d="M442.733 331.8H67.267c-14.507 0-25.6-11.093-25.6-25.6 0-14.507 11.093-25.6 25.6-25.6h375.467c14.507 0 25.6 11.093 25.6 25.6-.001 14.507-11.094 25.6-25.601 25.6"
                  transform="translate(1 1)"
                ></path>
                <path
                  fill="#FFA800"
                  d="M442.733 280.6h-25.6c14.507 0 25.6 11.093 25.6 25.6s-11.093 25.6-25.6 25.6h25.6c14.507 0 25.6-11.093 25.6-25.6s-11.093-25.6-25.6-25.6"
                  transform="translate(1 1)"
                ></path>
                <path
                  fill="#FFF"
                  d="M67.267 280.6h25.6c-14.507 0-25.6 11.093-25.6 25.6s11.093 25.6 25.6 25.6h-25.6c-14.507 0-25.6-11.093-25.6-25.6s11.093-25.6 25.6-25.6"
                  transform="translate(1 1)"
                ></path>
                <path
                  fill="#63D3FD"
                  d="M314.733 323.267C314.733 356.547 288.28 383 255 383s-59.733-26.453-59.733-59.733S221.72 263.533 255 263.533s59.733 26.454 59.733 59.734"
                  transform="translate(1 1)"
                ></path>
                <path
                  fill="#3DB9F9"
                  d="M255 263.533c-4.267 0-8.533.853-12.8 1.707 26.453 5.973 46.933 29.867 46.933 58.027s-20.48 52.053-46.933 58.027c4.267.853 8.533 1.707 12.8 1.707 33.28 0 59.733-26.453 59.733-59.733S288.28 263.533 255 263.533"
                  transform="translate(1 1)"
                ></path>
                <path
                  d="M340.333 50.2H169.667c-14.507 0-25.6-11.093-25.6-25.6S155.16-1 169.667-1h170.667c14.507 0 25.6 11.093 25.6 25.6s-11.094 25.6-25.601 25.6zM169.667 16.067c-5.12 0-8.533 3.413-8.533 8.533s3.413 8.533 8.533 8.533h170.667c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533H169.667zM340.333 511H169.667c-14.507 0-25.6-11.093-25.6-25.6s11.093-25.6 25.6-25.6h170.667c14.507 0 25.6 11.093 25.6 25.6S354.84 511 340.333 511zm-170.666-34.133c-5.12 0-8.533 3.413-8.533 8.533s3.413 8.533 8.533 8.533h170.667c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533H169.667zM400.067 425.667H109.933c-14.507 0-25.6-11.093-25.6-25.6 0-14.507 11.093-25.6 25.6-25.6h290.133c14.507 0 25.6 11.093 25.6 25.6.001 14.506-11.093 25.6-25.599 25.6zm-290.134-34.134c-5.12 0-8.533 3.413-8.533 8.533s3.413 8.533 8.533 8.533h290.133c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533H109.933zM434.2 237.933H75.8c-14.507 0-25.6-11.093-25.6-25.6s11.093-25.6 25.6-25.6h358.4c14.507 0 25.6 11.093 25.6 25.6s-11.093 25.6-25.6 25.6zM75.8 203.8c-5.12 0-8.533 3.413-8.533 8.533 0 5.12 3.413 8.533 8.533 8.533h358.4c5.12 0 8.533-3.413 8.533-8.533 0-5.12-3.413-8.533-8.533-8.533H75.8zM408.6 152.6H101.4c-18.773 0-34.133-15.36-34.133-34.133s15.36-34.133 34.133-34.133h307.2c18.773 0 34.133 15.36 34.133 34.133S427.373 152.6 408.6 152.6zm-307.2-51.2c-9.387 0-17.067 7.68-17.067 17.067s7.68 17.067 17.067 17.067h307.2c9.387 0 17.067-7.68 17.067-17.067S417.987 101.4 408.6 101.4H101.4z"
                  transform="translate(1 1)"
                ></path>
                <path
                  d="M344.6 476.867H165.4l-2.56-3.413c-14.507-17.067-27.307-34.133-37.547-52.053l-7.68-12.8H393.24l-7.68 12.8c-11.093 17.92-23.893 34.987-37.547 52.053l-3.413 3.413zM173.933 459.8H336.92c9.387-11.093 17.92-22.187 25.6-34.133H149.187c6.826 11.946 15.36 23.04 24.746 34.133zM429.08 203.8H80.92l2.56-10.24c3.413-17.92 9.387-34.987 16.213-52.907l1.707-5.12h307.2l2.56 5.12c6.827 17.067 11.947 34.987 16.213 52.907l1.707 10.24zm-326.827-17.067h305.493c-2.56-11.093-6.827-23.04-11.093-34.133h-284.16c-4.266 11.093-7.68 23.04-10.24 34.133zM392.387 101.4H117.613l7.68-12.8c19.627-33.28 37.547-52.053 38.4-52.907l2.56-2.56H344.6l2.56 2.56c.853.853 18.773 19.627 38.4 52.907l6.827 12.8zM147.48 84.333h214.187c-11.093-17.067-21.333-29.013-25.6-34.133H173.08c-4.267 5.12-13.653 17.067-25.6 34.133zM255 391.533H108.227l-2.56-5.12c-8.533-17.067-14.507-34.987-19.627-52.907l-2.56-10.24h119.467l.853 7.68c3.413 24.747 25.6 43.52 50.347 43.52v17.067H255zm-135.68-17.066h90.453c-10.24-8.533-17.92-20.48-21.333-34.133h-81.92c3.413 11.093 7.68 23.039 12.8 34.133zM401.773 391.533H255v-17.067c25.6 0 46.933-18.773 50.347-43.52l.853-7.68h119.467l-2.56 11.093c-5.12 17.92-11.093 34.987-19.627 52.907l-1.707 4.267zm-101.546-17.066h90.453c5.12-11.093 9.387-23.04 12.8-34.133h-82.773c-3.414 13.653-10.24 25.599-20.48 34.133zM432.493 289.133H293.4l-2.56-2.56c-9.387-9.387-22.187-14.507-35.84-14.507s-26.453 5.12-35.84 14.507l-2.56 2.56H77.507l-.853-7.68c-.853-17.92-.853-34.987.853-52.907l.853-7.68h353.28l.853 7.68c1.707 17.92 1.707 34.987 0 52.907v7.68zm-132.266-17.066H416.28c.853-11.093.853-23.04 0-34.133H93.72c-.853 11.093-.853 23.04 0 34.133h116.053C222.573 260.973 237.933 255 255 255s32.427 5.973 45.227 17.067z"
                  transform="translate(1 1)"
                ></path>
                <path
                  d="M255 391.533c-37.547 0-68.267-30.72-68.267-68.267S217.453 255 255 255s68.267 30.72 68.267 68.267-30.72 68.266-68.267 68.266zm0-119.466c-28.16 0-51.2 23.04-51.2 51.2 0 28.16 23.04 51.2 51.2 51.2s51.2-23.04 51.2-51.2c0-28.16-23.04-51.2-51.2-51.2z"
                  transform="translate(1 1)"
                ></path>
                <path
                  d="M205.507 340.333H67.267c-18.773 0-34.133-15.36-34.133-34.133s15.36-34.133 34.133-34.133H234.52l-15.36 14.507c-10.24 10.24-15.36 23.04-15.36 36.693 0 2.56 0 4.267.853 7.68l.854 9.386zm-138.24-51.2c-9.387 0-17.067 7.68-17.067 17.067s7.68 17.067 17.067 17.067h119.467c0-11.947 3.413-23.893 9.387-34.133H67.267zM442.733 340.333h-138.24l1.707-9.387c0-2.56.853-5.12.853-7.68 0-13.653-5.12-26.453-15.36-36.693l-16.213-14.507h167.253c18.773 0 34.133 15.36 34.133 34.133s-15.359 34.134-34.133 34.134zm-119.466-17.066h119.467c9.387 0 17.067-7.68 17.067-17.067s-7.68-17.067-17.067-17.067H313.88c5.973 10.24 9.387 22.187 9.387 34.134z"
                  transform="translate(1 1)"
                ></path>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};
export default Home;