import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faHome } from "@fortawesome/free-solid-svg-icons";
export default function Breadcrumb({ page }) {
  return (
    <nav className="text-gray-700 text-[12px] mb-4" aria-label="Breadcrumb">
      <ol className="list-reset flex  gap-1">
        <li
          onClick={() => (window.location.href = "/")}
          className="cursor-pointer"
        >
          <span className=" text-black/75">
            <FontAwesomeIcon icon={faHome} className="text-[#35afa0] " /> HOME
          </span>
        </li>
        <li>
          <span className=" text-gray-500">
            <FontAwesomeIcon icon={faGreaterThan} className="text-gray-500 w-3 h-3" />{" "}
            {page}
          </span>
        </li>
      </ol>
    </nav>
  );
}
