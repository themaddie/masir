// STYLE
import { styled, useTheme } from "styled-components";
import { Mail } from "@mui/icons-material";
// COMPONENT
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Info from "./components/Info";

const About = ({ title }) => {
    const { fontSize, breakpoint } = useTheme();

    const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    `;
    const Content = styled.div`
    min-height: calc(100vh - 155px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 3% 0 3% 0;
    @media (max-width: ${breakpoint.tablet}px) {
        margin: 5% 0 5% 0;
    }
    @media (max-width: ${breakpoint.phone}px) {
        margin: 8% 0 8% 0;
    }
    `;
    const Text = styled.span`
    cursor: default;
    font-size: ${fontSize.regular}rem;
    `;
    const Box = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin: 1% 0 2% 0;
    `;

    return (
        <Wrapper>
            <Header title="درباره ما" />
            <Content>
                <Text>مسیـ ـ ـر، ثمره یک دغدغه است.</Text>
                <Text>دغدغه پیدا کردن مفهوم «لذت»، در دنیا سریع و شلوغ این روزها.</Text>
                <Text>پس، بیا از مسیر لذت ببریم!</Text>
                <Info title="گام" desc="گام، همون وظیفه‌ایه که قراره به صورت روزمره انجام بدی. در ادامه با استفاده از مفهوم مسیر و نقشه، می‌تونی گام‌های هدفمندتری ایجاد کنی. یه سری گام‌ها (مثلا مسواک زدن یا کتاب خوندن)، باید هر روز تکرار بشن. هنگام ایجاد گام‌ها، با فعال کردن گزینه تکرار روزانه، به صورت خودکار، اون گام برات تکرار میشه. وقتی از قسمت مسیرها، گامی رو ایجاد می‌کنی، می‌تونی انتخاب کنی که قراره به لیست همون روزت اضافه بشه یا فعلا تو مسیرت بمونه تا بعدا براش تصمیم بگیری!" />
                <Info title="مسیر" desc="ما هر روز به حوزه‌های مختلفی رسیدگی می‌کنیم. بعضی از وظیفه‌هامون، مربوط به کارهای خونه است. بعضی‌ها، مربوط به کارهای شرکت یا مغازه. گاهی هم تمرین‌ها و آزمون‌های تحصیلی یا حتی روتین‌های ورزشی و تفریحی! ما هر کدوم از این حوزه‌ها رو بعنوان یک مسیر در نظر گرفتیم. با نام گذاری این مسیرها و ایجاد گام‌های موردنظرت، می‌تونی به تفکیک رنگ، اون گام‌ها رو در لیست روزانه‌ات ببینی." />
                <Info title="نقشه" desc="مفهوم نقشه، برگرفته از عبارت Roadmap معروف خودمونه! با نقشه، می‌تونی سه مدل هدف، کوتاه‌مدت، میان‌مدت و بلند مدت ایجاد کنی. نقشه‌ها می‌تونن زیرشاخه مسیر باشن و همچنین می‌تونن گام‌های مرتبط به خودشون رو داشته باشن. مثلا، من در حوزه (مسیر) شغلیم، می‌خوام یک برنامه‌نویس فول‌استک وب (هدف بلندمدت) باشم. برای رسیدن به این هدف، باید برنامه‌نویسی فرانت‌اند (هدف میان‌مدت اول) و برنامه‌نویسی بک‌اند (هدف میان‌مدت دوم) رو یاد بگیرم. حالا با استفاده از این اهداف و اهداف جزئی‌تر (هدف کوتاه‌مدت)، یک «نقشه» راه می‌سازم و هر روز براش «گام» برمی‌دارم." />
                <Text>برای سوال، انتقاد یا پیشنهاد، می‌تونی از طریق ایمیل زیر با ما در ارتباط باشی:</Text>
                <Box>
                    <Text>maddietale@gmail.com</Text>
                    <Mail />
                </Box>
            </Content>
            <Footer />
        </Wrapper>
    );
};

export default About;