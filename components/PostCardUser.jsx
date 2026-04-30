'use client';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

export default function PostCardUser({ user }) {
  return (
    <Card className="bg-slate-900 border-slate-800 hover:border-slate-700 hover:shadow-lg transition-all">
      <CardContent className="flex flex-col items-center p-5">
        <div className="relative w-24 h-24 mb-4">
          <Image
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            title={`${user.first_name} ${user.last_name}`}
            fill
            sizes="96px"
            className="rounded-full object-cover border-4 border-slate-700 shadow-sm"
            priority={user.id <= 4}
          />
        </div>

        <div className="text-center">
          <h3 className="text-lg font-bold text-white">
            {user.first_name} {user.last_name}
          </h3>
          <p className="text-sm text-slate-400">{user.email}</p>
        </div>
      </CardContent>
    </Card>
  );
}