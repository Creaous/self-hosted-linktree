import { LinkItem } from '@/components/link-item';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Extra } from '@/extra';
import { info, links } from '@/info';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24 gap-4">
			<Avatar className="w-[96px] h-[96px]">
				<AvatarImage
					src={info.avatar}
					alt={`${info.name}'s avatar`}
					height={96}
					width={96}
				/>
				<AvatarFallback>Loading...</AvatarFallback>
			</Avatar>

			<div className="text-center">
				<h1 className="text-xl font-bold">{info.name}</h1>
				<p className="text-base">{info.description}</p>
			</div>

			<div className="flex flex-col gap-2" id="links">
				{links.map((link) => (
					<LinkItem key={link.title} link={link} />
				))}
			</div>

			<div id="extra">
				<Extra />
			</div>
		</main>
	);
}
