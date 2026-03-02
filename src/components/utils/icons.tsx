// Icons from Lucide
import { ArrowDown as LucideArrowDown, ArrowUp as LucideArrowUp, Briefcase as LucideBriefcase, Mail as LucideMail, MapPin as LucideMapPin, Globe as LucideGlobe, Download as LucideDownload, Menu as LucideMenu, ChevronDown as LucideChevronDown, ChevronLeft as LucideChevronLeft, ChevronRight as LucideChevronRight, Monitor as LucideMonitor, Zap as LucideZap, Server as LucideServer, Rocket as LucideRocket, X as LucideX, Send as LucideSend } from "lucide-react";

export const ArrowDown = (props: any) => <LucideArrowDown {...props} />;
export const ArrowUp = (props: any) => <LucideArrowUp {...props} />;
export const Briefcase = (props: any) => <LucideBriefcase {...props} />;
export const Mail = (props: any) => <LucideMail {...props} />;
export const MapPin = (props: any) => <LucideMapPin {...props} />;
export const Globe = (props: any) => <LucideGlobe {...props} />;
export const Download = (props: any) => <LucideDownload {...props} />;
export const Menu = (props: any) => <LucideMenu {...props} />;
export const ChevronDown = (props: any) => <LucideChevronDown {...props} />;
export const ChevronLeft = (props: any) => <LucideChevronLeft {...props} />;
export const ChevronRight = (props: any) => <LucideChevronRight {...props} />;
export const Monitor = (props: any) => <LucideMonitor {...props} />;
export const Zap = (props: any) => <LucideZap {...props} />;
export const Server = (props: any) => <LucideServer {...props} />;
export const Rocket = (props: any) => <LucideRocket {...props} />;
export const X = (props: any) => <LucideX {...props} />;
export const Send = (props: any) => <LucideSend {...props} />;

// Icons from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faQuoteRight, faTachometerAlt, faTasks } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const GraduationCap = (props: any) => <FontAwesomeIcon icon={faGraduationCap} {...props} />;
export const Quote = (props: any) => <FontAwesomeIcon icon={faQuoteRight} {...props} />;
export const Gauge = (props: any) => <FontAwesomeIcon icon={faTachometerAlt} {...props} />;
export const Kanban = (props: any) => <FontAwesomeIcon icon={faTasks} {...props} />;
export const Github = (props: any) => <FontAwesomeIcon icon={faGithub} {...props} />;
export const Linkedin = (props: any) => <FontAwesomeIcon icon={faLinkedin} {...props} />;
