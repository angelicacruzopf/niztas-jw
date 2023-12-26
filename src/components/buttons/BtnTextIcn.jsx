import { Link } from "react-router-dom";

export default function BtnTextIcn() {
    return(
        <div class="font-base font-semibold">
              <Link to="/blog">Secondary action</Link>
              <i class="fa-solid fa-arrow-right ps-2"></i>
        </div>
    );
};
