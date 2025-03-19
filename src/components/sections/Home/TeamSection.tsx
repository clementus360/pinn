"use client"
import { Team } from '@/utils/types'
import { TeamCard } from '../..'
import { motion } from "motion/react"

interface TeamSectionProps {
    team: Team[]
}

export const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
    return (
        <section className="flex flex-col gap-12 px-4 md:px-16 py-12 items-center justify-center h-max">
            {/* Title & Description Animation */}
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col md:px-24 gap-4 items-center justify-center"
            >
                <h2 className="md:w-10/12 text-center text-3xl md:text-5xl font-medium text-primary dark:text-white">
                    Meet the Creatives Making It Happen
                </h2>
                <p className="text-primary dark:text-white md:w-8/12 text-center">
                    Great design doesn't happen by accident—it takes a team of creative minds, problem-solvers, and big thinkers. Meet the people behind the work, bringing brands to life with strategy, style, and a little bit of magic.
                </p>
            </motion.div>

            {/* Team Cards Animation */}
            <motion.div
                className="flex flex-col md:grid grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2 }
                    }
                }}
            >
                {team.map((member, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <TeamCard
                            name={member.name}
                            position={member.position}
                            image={member.image}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}