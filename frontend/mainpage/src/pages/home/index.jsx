import { NavBar } from "../../component/layout/index";
import { Public } from "../../component/wrapper/index";
import "./index.css";

const Home = () => {
  return (
    <Public>
      <NavBar>
          <div className="header fixed w-full">
            <a href="#" className="brand-header">
              <img className="w-10 ml-1" src="./src/images/logo.svg" alt="" />
              <h4 className="name">Résumé</h4>
            </a>
            <div className="menu">
              <a href="#about">Giới thiệu</a>
              <a href="#education">Học vấn</a>
              <a href="#attainment">Thành tựu</a>
              <a href="#experience">Kinh nghiệm</a>
              <a href="#product">Sản phẩm</a>
              <a href="#contact">Liên hệ</a>
            </div>
          </div>
          <div className="body">
            <div id="about" className="bg-primary">
              <h1 className="p-3 text-primary font-bold  text-center">Giới thiệu</h1>
              <div className="card bg-primary">
                <div className="flex items-center bg-primary">
                  <img className="w-32 h-36" src="./src/images/portrait.png" />
                  <div className="content bg-primary">
                    <div className="group">
                      <p className="label text-primary">Họ tên</p>
                      <p className="text-content-lg font-code text-primary">
                        &gt; Nguyễn Tuấn Anh
                      </p>
                    </div>
                    <div className="group">
                      <p className="label text-primary">Năm sinh</p>
                      <p className="text-content-lg font-code text-primary">
                        &gt; 2003
                      </p>
                    </div>
                    <div className="group">
                      <p className="label text-primary">Nơi ở</p>
                      <p className="text-content-lg font-code text-primary">
                        &gt; Bình Chánh, TP. Hồ Chí Minh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="education" className="bg-secondary">
              <h1 className="p-3 font-bold text-secondar text-center">Học vấn</h1>
              <div className="card bg-secondary">
                <div className="flex items-center bg-secondary">
                  <img
                    className="w-32 bg-secondary"
                    src="https://www.uit.edu.vn/sites/vi/files/images/Logos/Logo_UIT_Web_Transparent.png"
                  />
                  <div className="content bg-secondary">
                    <div className="group">
                      <p className="label text-secondary">
                        Chuyên ngành:{" "}
                        <span className="text-primary">Hệ thống thông tin</span>
                      </p>
                      <p className="text-content-lg font-code text-secondary">
                        &gt; Trường ĐH CNTT - ĐHQG TP.HCM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center bg-secondary">
                  <img
                    className="w-32 h-8 bg-secondary"
                    src="https://iigvietnam.com/wp-content/uploads/2021/05/ssAsset-9.png"
                  />
                  <div className="content bg-secondary">
                    <div className="group">
                      <p className="label text-secondary">
                        Nghe - đọc:{" "}
                        <span className="text-primary">565/900</span>
                      </p>
                      <p className="text-content-lg font-code text-secondary">
                        &gt; Bài kiểm tra tiếng Anh giao tiếp quốc tế - TOEIC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="attainment" className="bg-primary">
              <h1 className="p-3 text-primary font-bold  text-center">Thành tựu</h1>
              <div className="card bg-primary">
                <div className="flex items-center bg-primary">
                  <img
                    className="w-32 h-16"
                    src="data:image/jpeg;base64,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"
                  />
                  <div className="content bg-primary">
                    <div className="group">
                      <p className="label text-primary">
                        Thành tích:{" "}
                        <span className="text-secondary">
                          Giải Nhì - Giải Ý tưởng sáng tạo
                        </span>
                      </p>
                      <p className="text-content-lg font-code text-primary">
                        &gt; WebDev Adventure 2022 - UIT
                      </p>
                      <p className="text-primary">
                        Meowmeow Team - Vai trò cá nhân: Front-end Dev
                      </p>
                      <p className="text-primary">Dự án: TutorCat</p>
                      <p className="time text-primary">Tháng 5 - 2022</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center bg-primary">
                  <img
                    className="w-32 h-32"
                    src="https://f1.hcm.edu.vn//UploadImages/Config/hcmedu/Logo.png"
                  />
                  <div className="content bg-primary">
                    <div className="group">
                      <p className="label text-primary">
                        Thành tích:{" "}
                        <span className="text-secondary">Giải Nhì</span>
                      </p>
                      <p className="text-content-lg font-code text-primary">
                        &gt; Cuộc thi Khoa Học Kỹ Thuật cấp Thành phố
                      </p>
                      <p className="text-primary">
                        Nhóm 2 người - Vai trò cá nhân: Trưởng nhóm
                      </p>
                      <p className="text-primary">
                        Dự án: FaceCheckin - Lĩnh vực: Hệ thống nhúng
                      </p>
                      <p className="time text-primary">Tháng 4 - 2021</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center bg-primary">
                  <img
                    className="w-32 h-32"
                    src="https://f1.hcm.edu.vn//UploadImages/Config/hcmedu/Logo.png"
                  />
                  <div className="content bg-primary">
                    <div className="group">
                      <p className="label text-primary">
                        Thành tích:{" "}
                        <span className="text-secondary">Giải Ba</span>
                      </p>
                      <p className="text-content-lg font-code text-primary">
                        &gt; Kỳ thi Học Sinh Giỏi cấp Thành phố
                      </p>
                      <p className="text-primary">Cá nhân</p>
                      <p className="text-primary">Môn: Tin học</p>
                      <p className="time text-primary">Tháng 3 - 2021</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center bg-primary">
                  <img
                    className="w-32 h-32"
                    src="https://f1.hcm.edu.vn//UploadImages/Config/hcmedu/Logo.png"
                  />
                  <div className="content bg-primary">
                    <div className="group">
                      <p className="label text-primary">
                        Thành tích:{" "}
                        <span className="text-secondary">Giải Tư</span>
                      </p>
                      <p className="text-content-lg font-code text-primary">
                        &gt; Robotacon IYRC 2019
                      </p>
                      <p className="text-primary">Cá nhân</p>
                      <p className="text-primary">
                        Dự án: Save Earth - Lĩnh vực: Lập trình sáng tạo
                      </p>
                      <p className="time text-primary">Tháng 5 - 2019</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center bg-primary">
                  <img
                    className="w-32 h-32"
                    src="https://f1.hcm.edu.vn//UploadImages/Config/hcmedu/Logo.png"
                  />
                  <div className="content bg-primary">
                    <div className="group">
                      <p className="label text-primary">
                        Thành tích:{" "}
                        <span className="text-secondary">Huy chương Bạc</span>
                      </p>
                      <p className="text-content-lg font-code text-primary">
                        &gt; Kỳ thi Olympic Tháng Tư cấp Thành phố
                      </p>
                      <p className="text-primary">Cá nhân</p>
                      <p className="text-primary">Môn: Tin học</p>
                      <p className="time text-primary">Tháng 4 - 2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="experience" className="bg-secondary">
              <h1 className="p-3 font-bold text-secondar text-center">Kinh nghiệm</h1>
              <div className="card bg-secondary">
                <div className="flex items-center">
                  <img
                    className="w-32 h-32"
                    src="https://teky.edu.vn/static/web/images/logo-full.svg"
                  />
                  <div className="content">
                    <div className="group">
                      <p className="label text-secondary">
                        Vị trí:{" "}
                        <span className="text-primary">
                          Giảng viên Parttime
                        </span>
                      </p>
                      <p className="text-content-lg font-code text-secondary">
                        &gt; Học viện Sáng tạo Công nghệ TEKY
                      </p>
                      <p className="time text-secondary">
                        Tháng 8 - 2022 đến nay
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="product" className="bg-primary">
              <h1 className="p-3 text-primary font-bold text-center">Sản phẩm</h1>
              <div className="card">
                <div className="flex">
                  <img
                    className="w-32"
                    src="https://tutorcat.vercel.app/image/tutorcatlogo.png"
                  />
                  <div className="content">
                    <div className="group">
                      <p className="label text-primary">
                        <span className="text-secondary">
                          Diễn đàn lập trình
                        </span>
                      </p>
                      <p className="text-content-lg font-code text-primary">
                        &gt; TutorCat
                      </p>
                      <a
                        className="link"
                        href="https://tutorcat.vercel.app/"
                        target="_blank"
                      >
                        tutorcat.vercel.app
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <img
                    className="w-32"
                    src="https://www.uit.edu.vn/sites/vi/files/images/Logos/Logo_UIT_Web_Transparent.png"
                  />
                  <div className="content ">
                    <div className="group">
                      <p className="label text-primary">
                        <span className="text-secondary">
                          Sắp xếp TKB cho sinh viên UIT
                        </span>
                      </p>
                      <p className="text-content-lg font-code text-primary">
                        &gt; UIT Schedule
                      </p>
                      <a
                        className="link"
                        href="https://anhit.name.vn/uit-schedule/"
                        target="_blank"
                      >
                        anhit.name.vn/uit-schedule
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="contact" className="bg-secondary">
              <h1 className="p-3 font-bold text-secondar text-center">Liên hệ</h1>
              <div className="card bg-secondary">
                <div className="content bg-secondary">
                  <a href="mailto:anhnguyentuan8@gmail.com" target="_blank">
                    <div className="group">
                      <p className="label text-secondary">Email</p>
                      <div className="flex gap-2">
                        <img
                          className="w-5"
                          src="./src/images/mail-svgrepo-com.svg"
                        />
                        <p className="text-content-lg font-code text-secondary">
                          anhnguyentuan8@gmail.com
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="https://github.com/sheroanh" target="_blank">
                    <div className="group">
                      <p className="label text-secondary">Github</p>
                      <div className="flex gap-2">
                        <img
                          className="w-5"
                          src="./src/images/github-svgrepo-com.svg"
                        />
                        <p className="text-content-lg font-code text-secondary">
                          sheroanh
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sheroanh/"
                    target="_blank"
                  >
                    <div className="group">
                      <p className="label text-secondary">Linkedin</p>
                      <div className="flex gap-2">
                        <img
                          className="w-5"
                          src="./src/images/linkedin-svgrepo-com.svg"
                        />
                        <p className="text-content-lg font-code text-secondary">
                          sheroanh
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </NavBar>
    </Public>
  );
};

export default Home;
