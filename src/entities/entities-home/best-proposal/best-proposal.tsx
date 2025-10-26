import style from './best-proposal.module.scss'

const BestProposal = () => {
    return (
        <div className={style.bestProposalBack}>
            <div className={style.proposalWrapper}>
                <div className={style.proposalText}>
                    <p className={style.textInner}>
                       Подборка эко-отелей
                    </p>
                </div>
                <div className={style.description}>
                    <h1 className={style.descriptionInner}>
                        Лучшие предложения для летнего отдыха
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default BestProposal